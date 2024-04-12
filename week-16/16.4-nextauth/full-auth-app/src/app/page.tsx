import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-gradient-to-t from-sky-500 to-sky-700">
      <div className="flex flex-col gap-4 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Auth App
        </h1>
        <p className="text-sky-200 font-semibold">
          A complete authentication app built using NextAuth
        </p>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
