"use client";
// libs
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

// hooks
import { useToast } from "../hooks/useToast";

// components
import Button from "../ui/Button";
import Input from "../ui/Input";
import Toast from "./Toast";

// utils
import { password as pass, email as em } from "../utils/constants";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const { toast, showToast } = useToast();

  // functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // this function gets the email and password from the user input match it if correct add the cookie with auth tokken and redirect to the dashboard
    e.preventDefault();
    if (email.toLowerCase() === em && password === pass) {
      document.cookie = "user=Authenticated; path=/;";
      showToast("Logged in successfully", "success");
      redirect("/dashboard");
    } else {
      showToast("Invalid email or password", "error");
    }
  };

  return (
    <div className="relative w-full h-screen flex">
      {toast && <Toast message={toast.message} type={toast.type} />}
      {/* left form section */}
      <div className="relative w-1/2 h-full flex items-center justify-center gap-11 flex-col ">
        <div className="absolute top-10 left-10 text-green-400">LOGO</div>

        <form
          onSubmit={handleSubmit}
          className="max-w-96 w-full flex flex-col gap-5"
          action=""
        >
          <div className="flex flex-col gap-4 w-full items-start">
            <h1 className="text-3xl text-bold">Welcome Back</h1>
            <p className="text-gray-700 text-xl">Please enter your detials</p>
          </div>
          <div className="flex flex-col w-full gap-5">
            <Input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs">
              <input type="checkbox" name="30-days" id="30-days" />
              <label htmlFor="30-days">Remember for 30 days</label>
            </div>

            <Button
              variant="ghost"
              className="text-blue-600 hover:underline"
              href="#"
            >
              Forget Password
            </Button>
          </div>
          <div className="flex flex-col w-full gap-5">
            <Button type="submit">Sign in</Button>

            <Button variant="secondary">Sign in with Google</Button>
          </div>
        </form>

        <p>
          {"Don't have an account "}
          <Button
            variant="ghost"
            href="#"
            className="text-blue-600 hover:underline"
          >
            Sign up
          </Button>
        </p>
      </div>
      <div className="relative h-screen w-1/2 z-0">
        <Image
          src="/bg.jpg"
          alt="flower"
          fill
          className="inset-0 object-cover"
        />
      </div>
    </div>
  );
}

export default LoginPage;
