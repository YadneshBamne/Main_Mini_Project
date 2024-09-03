
"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen bg-white">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div className="text-black">
         <span className="text-black">Name:</span>  <span className="font-bold text-black">{session?.user?.name}</span>
        </div>
        <div className="text-black">
        <span className="text-black">Email:</span> <span className="font-bold text-black">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-white text-black font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
