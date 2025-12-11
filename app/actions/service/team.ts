"use server";
import { prisma } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upDateTeamMember = async (data: FormData) => {
  //   console.log(data)
  // update service

  const updateTeam = await prisma.team.update({
    where: {
      id: Number(data.get("id")),
    },
    data: {
      name: (data.get("name") ?? "") as string,
      profession: (data.get("profession") ?? "") as string,
      bio_data: (data.get("bio_data") ?? "") as string,
      image: (data.get("image") ?? "") as string,
    },
  });

  // console.log('successfully updated', updateService);
  revalidatePath("/admin/team")
  redirect("/admin/team");
};

// add service
export const addTeamMember = async (prevState: any, data: FormData) => {
  const name = data.get("name");
  const profession = data.get("profession");
  const bio_data = data.get("bio_data");
  const image = data.get("image");

  if (!name || !profession || !bio_data || !image) {
    throw new Error("Missing fields");
  }

  const addNew = await prisma.team.create({
    data: {
      name: name as string,
      profession: profession as string,
      bio_data: bio_data as string,
      image: image as string,
    },
  });

  // console.log("successfully added",addNew);
  revalidatePath("/admin/team")
  redirect("/admin/team");
};

// delete service
export const deleteTeamMember = async (data: any) => {
  const deleteItem = await prisma.team.delete({
    where: { id: Number(data) },
  });
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/team")

};
