"use server";
import { prisma } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upDateThought = async (data: FormData) => {
  //   console.log(data)
  // update Thought 

  const updateThought = await prisma.thought.update({
    where: {
      id: Number(data.get("id")),
    },
    data: {
      experts_name: (data.get("experts_name") ?? "") as string,
      bio_data: (data.get("bio_data") ?? "") as string,
      thought: (data.get("thought") ?? "") as string,
      image: (data.get("image") ?? "") as string,
    },
  });

  // console.log('successfully updated', updateThought);
  revalidatePath("/admin/thought")
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

  const addNew = await prisma.thought.create({
    data: {
      experts_name: (data.get("experts_name") ?? "") as string,
      bio_data: (data.get("bio_data") ?? "") as string,
      thought: (data.get("thought") ?? "") as string,
      image: (data.get("image") ?? "") as string,
    },
  });

  // console.log("successfully added",addNew);
  revalidatePath("/admin/thought")
  redirect("/admin/thought");
};

// delete service
export const deleteThought = async (data: any) => {
  const deleteItem = await prisma.thought.delete({
    where: { id: Number(data) },
  });
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/thought")

};
