"use client";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Header() {
  const router = useRouter();
  const handlelogout = () => {
    Cookies.remove("user", { path: "/" });
    toast("Logged out successfully");
    router.push("/login");
  };
  return (
    <div className="p-10 h-fit">
      <div className="w-full h-auto p-5 flex items-center justify-between px-5 bg-red-200 rounded-lg">
        <h1 className="text-3xl text-red-950 font-bold">LOGO</h1>

        <button
          onClick={handlelogout}
          className="px-10 py-2 rounded-l-full rounded-r-full bg-red-500 hover:bg-red-600 text-white"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
