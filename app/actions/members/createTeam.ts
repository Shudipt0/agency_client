"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upDateTeamMember = async (data: FormData) => {
  //   console.log(data)
  // update service

  // console.log('successfully updated', updateService);
  revalidatePath("/admin/team");
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

  // console.log("successfully added",addNew);
  revalidatePath("/admin/team");
  redirect("/admin/team");
};

// delete service
export const deleteTeamMember = async (data: any) => {
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/team");
};
