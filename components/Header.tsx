"use client";
// libs
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// hooks
import { useToast } from "../hooks/useToast";

// components
import Button from "../ui/Button";
import ComponentPlaceholder from "../ui/ComponentPlaceholder";
import Toast from "./Toast";

function Header() {
  const { toast, showToast } = useToast();
  const router = useRouter();
  
//functions
  const handlelogout = () => {
    //handlelogout function basically remove the authentication tokken from the cookies and redirect it to login page
    Cookies.remove("user", { path: "/" });
    showToast("Logged out successfully", "success");
    router.push("/login");
  };
  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} />}

      <ComponentPlaceholder
        height="fit-content"
        width="100%"
        textColor="text-red-900"
        backgroundColor="bg-red-200"
      >
        <div className="w-full flex items-center justify-between ">
          <h1 className="text-3xl font-bold">LOGO</h1>

          <Button variant="danger" onClick={handlelogout}>
            Log out
          </Button>
        </div>
      </ComponentPlaceholder>
    </>
  );
}

export default Header;
