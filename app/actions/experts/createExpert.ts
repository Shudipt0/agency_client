"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upDateThought = async (data: FormData) => {
  //   console.log(data)
  // update Thought

  // console.log('successfully updated', updateThought);
  revalidatePath("/admin/thought");
  redirect("/admin/thought");
};

// add Thought
export const addThought = async (prevState: any, data: FormData) => {
  const experts_name = data.get("experts_name");
  const bio_data = data.get("bio_data");
  const thought = data.get("thought");
  const image = data.get("image");

  if (!experts_name || !bio_data || !thought || !image) {
    throw new Error("Missing fields");
  }

  // console.log("successfully added",addNew);
  revalidatePath("/admin/thought");
  redirect("/admin/thought");
};

// delete service
export const deleteThought = async (data: any) => {
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/thought");
};
