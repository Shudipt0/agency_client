

import Link from "next/link";
import React from "react";
import { checkRole } from "@/lib/authUtils";

const DashboardButton = async () => {
const isAdmin = await checkRole("admin");
  const isEditor = await checkRole("editor");
  return (
    <div className="hidden md:flex fixed -mt-10 ">
      {isAdmin || isEditor ? (
        <button className="bg-gray-400 text-black/80 font-mono text-sm px-3 py-1 rounded-md hover:bg-gray-500 transition duration-300 ">
          <Link href="/admin">Dashboard</Link>
        </button>
      ) : null}
    </div>
  );
};

export default DashboardButton;
