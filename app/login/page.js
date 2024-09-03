"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-white">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-white">
        <h1 className="text-xl text-black font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded-full text-black">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="your_mail@gmail.com"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-white rounded-full text-black font-bold cursor-pointer px-6 py-2">
            <h1 className="text-black">Login</h1>
          </button>

          {error && (
            <div className="bg-red-500 text-black w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right text-black" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}