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
