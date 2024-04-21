import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button appName="Hello from the merchant-app!">Merchant app</Button>
    </div>
  );
}
