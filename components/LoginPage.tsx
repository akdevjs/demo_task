"use client";
// libs
import Image from "next/image";

// hooks
import { useActionState } from "react";

// components
import Button from "../ui/Button";
import Input from "../ui/Input";

// utils
import { login } from "../libs/auth";
import { useFormStatus } from "react-dom";

function LoginPage() {
  const [state, loginAction] = useActionState(login, null);

  return (
    <div className="relative w-full h-screen flex">
      {/* left form section */}
      <div className="relative w-1/2 h-full flex items-center justify-center gap-11 flex-col ">
        <div className="absolute top-10 left-10 text-green-400">LOGO</div>

        <form
          className="max-w-96 w-full flex flex-col gap-5"
          action={loginAction}
        >
          <div className="flex flex-col gap-4 w-full items-start">
            <h1 className="text-3xl text-bold">Welcome Back</h1>
            <p className="text-gray-700 text-xl">Please enter your detials</p>
          </div>
          <div className="flex flex-col w-full gap-5">
            <Input type="text" placeholder="email" name="email" />
            {!state?.isValid && state?.errors.email && (
              <p className="-mt-3 text-red-400 text-sm font-semibold">
                {state?.errors.email}
              </p>
            )}
            <Input type="password" placeholder="password" name="password" />
            {!state?.isValid && state?.errors.password && (
              <p className="-mt-3 text-red-400 text-sm font-semibold">
                {state?.errors.password}
              </p>
            )}
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
            <SubmitButton />
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

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Sign in
    </Button>
  );
};
export default LoginPage;
