"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { password as pass, email as em } from "../utils/constants";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.toLowerCase() === em && password === pass) {
      document.cookie = "user=Authenticated; path=/;";
      toast("Logged in successfully");
      redirect("/dashboard");
    } else {
      toast("invalid email or password");
    }
  };
  return (
    <div className="w-full h-screen flex">
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
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border  rounded-md border-gray-600 bg-blue-100 p-2 outline:none"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border  rounded-md border-gray-600 bg-blue-100 p-2 outline:none"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs">
              <input type="checkbox" name="30-days" id="30-days" />
              <label htmlFor="30-days">Remember for 30 days</label>
            </div>

            <Link className="text-blue-600" href="#">
              Forget Password
            </Link>
          </div>
          <div className="flex flex-col w-full gap-5">
            <button
              className="px-5 py-2 text-white bg-blue-600 hover:bg-blue-400 rounded-md"
              type="submit"
            >
              Sign in
            </button>

            <button className="px-5 py-2 text-white bg-gray-600 hover:bg-gray-400 rounded-md">
              Sign in with Google
            </button>
          </div>
        </form>

        <p>
          {"Don't have an account"}
          <Link href="#" className="text-blue-600">
            Sign up
          </Link>
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
