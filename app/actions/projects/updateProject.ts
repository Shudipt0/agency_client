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

// validate project data
const projectSchema = z.object({
  title: z
    .string()
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be at most 50 characters long"),
  category: z.string().min(3, "Must be at least 3 characters long"),
  description: z.string().min(10, "Must be at least 10 characters long"),
  link: z.string().optional(),
  image_file: imageSchema.optional(),
  image_url: z.string().url().optional(),
});

export const upDateProject = async (prevState: any, data: FormData) => {
  const id = data.get("id") as string;
  // validate fields
  const rawImageFile = data.get("image_file");
  const parsed = projectSchema.safeParse({
    title: data.get("title") as string,
    category: data.get("category") as string,
    description: data.get("description") as string,
    link: data.get("link") as string,
    image_file:
      rawImageFile instanceof File && rawImageFile.size > 0
        ? (rawImageFile as File)
        : undefined,
    image_url: data.get("image_url") as string,
  });
  // console.log(parsed);
  if (!parsed.success) {
    console.error("Validation errors:", parsed.error.flatten().fieldErrors);
    return { errors: parsed.error.flatten().fieldErrors };
  }

  // ✅ build clean FormData (NO $ACTION_* keys)
  const validateFields = parsed.data;

  const payload = new FormData();
  payload.append("title", validateFields.title);
  payload.append("category", validateFields.category);
  payload.append("description", validateFields.description);
  if (validateFields.link) {
    payload.append("link", validateFields.link);
  }
  if (validateFields.image_file) {
    payload.append("image", validateFields.image_file);
  } else if (validateFields.image_url) {
    payload.append("image", validateFields.image_url);
  }
  // update projects
  const res = await fetch(`${process.env.BASE_URL}/projects/${id}`, {
    method: "PUT",
    body: payload,
    credentials: "include",
  });

  const project = await res.json();
  if (!res.ok) {
    console.error("API Error:", project);
    return { error: project.message || "Failed to add project" };
  }
  // console.log('successfully updated', updateusers);
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
};
