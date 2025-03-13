import { useState } from "react";

interface Toast {
  message: string;
  type?: "success" | "error";
}

export const useToast = () => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    console.log(message, type);
    setToast({ message, type });
    console.log(toast)
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return { toast, showToast };
};
