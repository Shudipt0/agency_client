import React from "react";
import image1 from "@/app/images/project1.svg";
import image2 from "@/app/images/project2.svg";
import image3 from "@/app/images/project4.svg";
import ProjectShowcaseCart from "../_components/ProjectShowcaseCart";
import { prisma } from "@/lib/utils";
export const dynamic = "force-dynamic";

// const ShowcaseItem = [
//   {
//     caterogy: "Web / App Development",
//     title: "Delex Relay , a delivery platfrome",
//     description:
//       "Delex is a Delivery Platforme for bussiness owner And indivudial who want to send packages from a point to an other ,Delex offer a tracking system too ",
//     image: image1,
//     link: "#",
//   },
//   {
//     caterogy: "UI/UX Design",
//     title: "Cooke Me ,Fresh food At your Home",
//     description:
//       "Cooke me is an platform that offer fresh meal with a cheap price and allow indivudial to sell their meals  ",
//     image: image2,
//     link: "#",
//   },
//   {
//     caterogy: "UI/UX Design",
//     title: "ADOC,Your Online Medical Appoinments",
//     description:
//       "ADOC Is an online Medical appoinment, That allow user To take an appoinment with a doctor , it alos work as a medical files Holder",
//     image: image3,
//     link: "#",
//   },
// ];

const allProjects = async () => {
  // data fetching from the database
  const projects = await prisma.project.findMany();
  return (
    <div className="w-full container mx-auto px-6 lg:px-28 flex flex-col justify-center items-center text-center my-20 lg:my-32 space-y-6 lg:space-y-8 p-6">
      {/* texts */}
      <div className="text-start lg:text-center space-y-3 lg:space-y-6">
        <h1 className="text-2xl lg:text-3xl font-bold ">Project Gallery</h1>
        <p className="text-[18px] lg:text-[22px] text-[#0E0E2C]/60  dark:text-white/60  lg:w-[732px] leading-tight">
          Explore a collection of projects showcasing various technologies and
          creative solutions.
        </p>
      </div>
      {/* project showcase section*/}
      <div className="w-full pt-16 lg:pt-32 lg:space-y-28">
        {projects.map((item) => (
          <ProjectShowcaseCart item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default allProjects;
