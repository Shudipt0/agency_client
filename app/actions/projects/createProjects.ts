"use server";
import { revalidatePath } from "next/cache";
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
  image: imageSchema.optional(),
});

// add projects
export const addProject = async (prevState: any, data: FormData) => {
  // validate fields
  const parsed = projectSchema.safeParse({
    title: data.get("title") as string,
    category: data.get("category") as string,
    description: data.get("description") as string,
    link: data.get("link") as string,
    image: data.get("image") as File,
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

  if (validateFields.image) {
    payload.append("image", validateFields.image);
  }

  try {
    const res = await fetch(`${process.env.BASE_URL}/projects`, {
      method: "POST",
      body: payload,
      credentials: "include",
    });

    const projects = await res.json();
    if (!res.ok) {
      console.error("API Error:", projects);
      return { error: projects.message || "Failed to add projects" };
    }

    return { success: true, projects };
    // revalidatePath("/admin/userss");
  } catch (error) {
    console.error("Error in projects adding:", error);
    return { error: "add projects failed" };
  }
};

// delete projects
export const deleteProject = async (id: string) => {
  const res = await fetch(`${process.env.BASE_URL}/projects/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const deleteItem = await res.json();
  if (!res.ok) {
    console.error("API Error:", deleteItem);
    return { error: deleteItem.message || "Failed to deleteItem" };
  }
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/projects");
};
