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

- Create the UI and componentize as much as possible.

- next-auth

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

    - use linkAccount() to link social provider account to a user
