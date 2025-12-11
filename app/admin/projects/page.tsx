import { DataTable } from "@/app/_components/DataTable";

import { prisma } from "@/lib/utils";
import React from "react";
import { columns } from "../../../lib/data/ProjectColumn";

const ProjectPage = async () => {
  const projects = await prisma.project.findMany();
  // console.log(team)
  return (
    <div className="w-full min-h-screen max-h-fit text-center bg-backgroundBanner bg-no-repeat bg-cover">
      <h1 className="text-[22px] font-semibold text-black/80 mt-10 ">
        Projects Table
      </h1>
      <div className="p-5">
        <DataTable data={projects} columns={columns} />
      </div>
    </div>
  );
};

export default ProjectPage;
