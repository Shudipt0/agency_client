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

// validate expert data
const expertschema = z.object({
  expert_name: z
    .string()
    .min(3, "Must be at least 3 characters long")
    .max(20, "Must be at most 20 characters long"),
  bio_data: z.string().min(5, "Must be at least 5 characters long"),
  thought: z.string().min(10, "Must be at least 10 characters long"),
  image_file: imageSchema.optional(),
  image_url: z.string().url().optional(),
});

export const upDateThought = async (prevState: any, data: FormData) => {
  const id = data.get("id") as string;
  // validate fields
  const rawImageFile = data.get("image_file");
  const parsed = expertschema.safeParse({
    expert_name: data.get("expert_name") as string,
    bio_data: data.get("bio_data") as string,
    thought: data.get("thought") as string,
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
  payload.append("expert_name", validateFields.expert_name);
  payload.append("bio_data", validateFields.bio_data);
  payload.append("thought", validateFields.thought);
  if (validateFields.image_file) {
    payload.append("image", validateFields.image_file);
  } else if (validateFields.image_url) {
    payload.append("image", validateFields.image_url);
  }
  // update Thought
  const res = await fetch(`http://localhost:5000/api/v1/experts/${id}`, {
    method: "PUT",
    body: payload,
    credentials: "include",
  });

  const expert = await res.json();
  if (!res.ok) {
    console.error("API Error:", expert);
    return { error: expert.message || "Failed to add expert" };
  }
  // console.log('successfully updated', updateThought);
  revalidatePath("/admin/thought");
  redirect("/admin/thought");
};
