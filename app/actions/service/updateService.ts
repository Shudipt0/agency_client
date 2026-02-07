"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

// image validate schema
const imageSchema = z
  .instanceof(File)
  .refine((file) => file.size > 0, "File connot be empty")
  .refine(
    (file) =>
      ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
        file.type
      ),
    "Only .jpg, .jpeg, .png, or .webp files are allowed"
  );

// validate service data
const serviceSchema = z.object({
  service_name: z
    .string()
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be at most 50 characters long"),
  description: z.string().min(10, "Must be at least 10 characters long"),
  image_file: imageSchema.optional(),
  image_url: z.string().url().optional(),
});

// update service
export const upDateService = async (prevState: any, data: FormData) => {
  const id = data.get("id") as string;
  // validate fields
  const rawImageFile = data.get("image_file");
  const parsed = serviceSchema.safeParse({
    service_name: data.get("service_name") as string,
    description: data.get("description") as string,
    image_file:
      rawImageFile instanceof File && rawImageFile.size > 0
        ? (rawImageFile as File)
        : undefined,
    image_url: data.get("image_url") as string,
  });

  // console.log(typeof id);
  if (!parsed.success) {
    console.error("Validation errors:", parsed.error.flatten().fieldErrors);
    return { errors: parsed.error.flatten().fieldErrors };
  }

  // ✅ build clean FormData (NO $ACTION_* keys)
  const validateFields = parsed.data;

  const payload = new FormData();
  payload.append("service_name", validateFields.service_name);
  payload.append("description", validateFields.description);
  if (validateFields.image_file) {
    payload.append("image", validateFields.image_file);
  } else if (validateFields.image_url) {
    payload.append("image", validateFields.image_url);
  }

  const res = await fetch(`${process.env.BASE_URL}/services/${id}`, {
    method: "PUT",
    body: payload,
    credentials: "include",
  });

  const service = await res.json();
  if (!res.ok) {
    console.error("API Error:", service);
    return { error: service.message || "Failed to add service" };
  }

  // back to all service page
  revalidatePath("/admin/services");
  redirect("/admin/services");
};
