"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upDateProject = async (data: FormData) => {
  //   console.log(data)
  // update service

  // console.log('successfully updated', updateService);
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
};

// add service
export const addProject = async (prevState: any, data: FormData) => {
  const category = data.get("category");
  const title = data.get("title");
  const description = data.get("description");
  const image = data.get("image");
  const link = data.get("link");

  if (!category || !title || !description || !image) {
    throw new Error("Missing fields");
  }

  // console.log("successfully added",addNew);
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
};

// delete service
export const deleteProject = async (data: any) => {
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/projects");
};
