import { Toaster } from "react-hot-toast";

export const MyToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          padding: "8px 16px",
          borderRadius: "30px",

          backgroundColor: "fcfcfc",
          fontWeight: 500,
        },
        success: {
          style: {
            border: "2px solid green",
            color: "green",
          },
        },
        error: {
          style: {
            border: "2px solid red",
            color: "red",
          },
        },
      }}
    />
  );
};
