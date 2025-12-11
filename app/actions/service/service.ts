"use server";
import { prisma } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upDateService = async (data: FormData) => {
  //   console.log(data)
  // update service

  const updateService = await prisma.service.update({
    where: {
      id: Number(data.get("id")),
    },
    data: {
      serviceName: (data.get("serviceName") ?? "") as string,
      description: (data.get("description") ?? "") as string,
      image: (data.get("image") ?? "") as string,
    },
  });

  // console.log('successfully updated', updateService);
  revalidatePath("/admin/services")
  redirect("/admin/services");
};

// add service
export const addService = async (prevState: any, data: FormData) => {
  const serviceName = data.get("serviceName");
  const description = data.get("description");
  const image = data.get("image");

  if (!serviceName || !description || !image) {
    throw new Error("Missing fields");
  }

  const addNew = await prisma.service.create({
    data: {
      serviceName: serviceName as string,
      description: description as string,
      image: image as string,
    },
  });

  // console.log("successfully added",addNew);
  revalidatePath("/admin/services")
  redirect("/admin/services");
};

// delete service
export const deleteService = async (data: any) => {
  const deleteItem = await prisma.service.delete({
    where: { id: Number(data) },
  });
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/services")

};
