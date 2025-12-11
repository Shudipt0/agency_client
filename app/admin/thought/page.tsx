import { DataTable } from "@/app/_components/DataTable";
import { columns } from "@/lib/data/ThoughtColumn";

import { prisma } from "@/lib/utils";
import React from "react";

const ThoughtPage = async () => {
  const thoughts = await prisma.thought.findMany();
  // console.log(team)
  return (
    <div className="w-full min-h-screen max-h-fit text-center bg-backgroundBanner bg-no-repeat bg-cover">
      <h1 className="text-[22px] font-semibold text-black/80 mt-10 ">
        Experts Table
      </h1>
      <div className="p-5">
        <DataTable data={thoughts} columns={columns} />
      </div>
    </div>
  );
};

export default ThoughtPage;
