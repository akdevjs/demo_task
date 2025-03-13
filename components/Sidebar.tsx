"use client";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="p-10 w-[40%] h-full">
      <div className="w-full h-full flex flex-col p-5 gap-2 bg-purple-200 rounded-lg">
        <Link
          className="p-5 w-full rounded-md bg-purple-300 text-purple-900 font-semibold hover:bg-purple-500"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="p-5 w-full rounded-md bg-purple-300 text-purple-900 font-semibold hover:bg-purple-500"
          href="/dashboard/other"
        >
          Other Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
