import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { Message } from "@repo/ui/message";
import { InputBox } from "@repo/ui/input-box";

export default function Page(): JSX.Element {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button appName="web" className={styles.button}>
        Click me!
      </Button>
      <Message>This is my new component</Message>
      <InputBox>Name</InputBox>
    </div>
  );
}
