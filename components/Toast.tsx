import React from "react";

interface Props {
  message: string;
  type?: "success" | "error";
}

function Toast({ message, type = "success" }: Props) {
  const cond_classes =
    type === "success"
      ? "bg-green-200 border-green-900 text-green-900"
      : "bg-red-200 border-red-900 text-red-900";
  return (
    <div
      className={`border p-5 rounded-lg fixed bottom-5 right-5 min-w-40 min-h-20 flex items-center justify-center font-semibold slide-in z-50 ${cond_classes} `}
    >
      {message}
    </div>
  );
}

export default Toast;
