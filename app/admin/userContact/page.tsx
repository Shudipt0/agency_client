import { DataTable } from "@/app/_components/DataTable";
import { columns } from "@/lib/data/UserContactColumn";

import { prisma } from "@/lib/utils";
import React from "react";
export const dynamic = "force-dynamic";

const UserContactPage = async () => {
  const userContact = await prisma.contact.findMany();
  // console.log(team)
  return (
    <div className="w-full min-h-screen max-h-fit text-center bg-backgroundBanner bg-no-repeat bg-cover">
      <h1 className="text-[22px] font-semibold text-black/80 mt-10 ">
        User Contact Table
      </h1>
      <div className="p-5">
        <DataTable data={userContact} columns={columns} />
      </div>
    </div>
  );
};

export default UserContactPage;
