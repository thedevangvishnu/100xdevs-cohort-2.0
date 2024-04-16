- @hookform/resolver/zod

- zodResolver and why we need to use resolvers

  - z.infer should be assigned to types and not variables
  - using form component from shadcn ui
    - Form, FormField, FormItem, FormLabel, FormControl and FormMessage components
    - `<Form>` takes {...form} as a prop
    - `<FormField />` takes control, name and render as prop

- useTransition()

  - isPending, startTransition(() => {})

- Adapters, prisma-adapter in next-auth

- Next-auth

  - installing next-auth
  - creating a root auth.ts and add main config for NextAuth() which is imported from "next-auth"
    - adding providers and other config options
  - provide an AUTH_SECRET variable
  - use the returns from NextAuth() in catch-all `[...nextauth]` route.ts file
  - create two separate auth():
    - one to be used inside nextjs middleware (that runs in the adge enviroment)
    - one to be used eles where, with prisma adapter (that doesn't by default run in the edge environment)

## Steps

### Create the UI and componentize as much as possible.

### next-auth

- Installing next-auth and prisma adapter

  - npm i next-auth@beta
  - npm i @auth/prisma-adapter
  - Create the prisma singleton instance

- Add AUTH_SECRET in .env file for NextAuth to use

- Setting up next-auth config:

  - create a base authConfig (containing the providers and their respective strategies) and use them:

    - one for the entire app (which will use the universal `auth()` from `NextAuth()` and will have the base authConfig (containing providers), adapters and session strategy).
    - use the `"jwt"` session strategy as `"database"` strategy is not supported in edge environments.
    - PrismaORM is not supported in edge environments by default. Hence, this setup is required.

    - one for the Nextjs middleware, which can run in edge environments.
      - this middleware will use the `auth()` to validate the user session and can be used to setup conditonal redirecting based on routes and session.

- Create the Credentials strategy:

  - use zod validation at this level also and then apply the same user and password validation logic. Return the user if all validation succeeds.

- Export signIn and signOut functions from `NextAuth()`, (which uses adapter and "jwt" strategy)

- Use signIn and signOut inside server-components or server-actions

- Callbacks in `NextAuth()`

  - Extend session information

    - async jwt({token, user, profile})
    - async session({token, session})
    - might also have to extend types in module `next-auth`

- Add providers (Google, GitHub, etc)

  - get clientId and clientSecret for each of these providers
  - add these providers and their config options
  - call these from client component using {signIn} from "next-auth/react"

- Event in `NextAuth()`

  - use `linkAccount()` to turn emailVerified to new Date() once the account has been linked

- Handle error

  - global error using an error page for authentication error
  - error handling for same email, different providers.

### Verify Email functionality

- Create new model for VerificationToken

- Create database functions to get token from this table by email and id

  - getVerificationTokenByEmail()
  - getVerificationTokenByToken()

- Create utility function for generating new token.

  - generateTokenByEmail()
  - use uuid package to generate random unique tokens
  - build this function in a way that before generating a new token, it check whether a token is already present for a particular email, then it should delete that token for that email and then generate a new one.

- Use this generateTokenByEmail() inside register server-action to generate a new token for a new user. Also, if this new user hasn't verified the email and tries to login with the same non-verified email, generate the token again and send it.

  - create fallback logic for restricting non-verified user to sign in inside the callback using the `async signIn({user, account})` in `NextAuth()`.

- Use Resend

  - Create a Resend account. Add apiKey to .env

  - Install resend in the project

    - npm i resend

  - Configure resend and send email inside a new libs file for resend

    - create an instance of Resend
    - create a wrapper funtion that uses `resend.emails.send()`

  - Create a new route and render a component that is going to show as soon as user is going to click the link in the confirmation email.

    - create server action that can be called inside the component, which should validate the token, the email of user for that token (if the token exists), then updates the emailVerified field in the db and then deletes the token.

    - use `react-spinners` package to show loaders

### Reset Password functionality

- Create a new model: PasswordResetToken

  - having similar strucute (id, email, token, expires)

- Create helper functions that will query this model to find the token using email or the token

- Create the utility function that generates a new password-reset-token

  - first it checks for similar token in the database. If, it exists, deletes it and creates a new one.

- Create a new wrapper function using Resend that will send password-reset email containing the link to create new password. Append the generated token inside this link

- Create a new route and a UI component that displays a form to add a new password.

- Create a respective server action that does all the validation for the token, the user that token belongs to and then updates the password and deletes the token if all validation is successfull.
