import { Button } from "@repo/ui/button";

export default async function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button appName="Hello from the user-app!">User app</Button>
    </div>
  );
}
