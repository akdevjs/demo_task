"use client";

// hooks
import { useToast } from "../hooks/useToast";

// components
import Button from "../ui/Button";
import Toast from "./Toast";

function ToastDemo() {
  const { toast, showToast } = useToast();

  const showSuccessToast = () => {
    showToast("Hello! This is the success toast", "success");
  };
  const showErrorToast = () => {
    showToast("Hello! This is the error toast", "error");
  };
  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} />}
      <div className="flex items-center gap-5">
        <Button onClick={showSuccessToast}>Sucess Toast</Button>
        <Button variant="danger" onClick={showErrorToast}>
          Error Toast
        </Button>
      </div>
    </>
  );
}

export default ToastDemo;
