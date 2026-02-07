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

// validate expert data
const expertschema = z.object({
  expert_name: z
    .string()
    .min(3, "Must be at least 3 characters long")
    .max(20, "Must be at most 20 characters long"),
  bio_data: z.string().min(5, "Must be at least 5 characters long"),
  thought: z.string().min(10, "Must be at least 10 characters long"),
  image: imageSchema.optional(),
});

// add Thought
export const addThought = async (prevState: any, data: FormData) => {
  // validate fields
  const parsed = expertschema.safeParse({
    expert_name: data.get("expert_name") as string,
    bio_data: data.get("bio_data") as string,
    thought: data.get("thought") as string,
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
  payload.append("expert_name", validateFields.expert_name);
  payload.append("bio_data", validateFields.bio_data);
  payload.append("thought", validateFields.thought);
  if (validateFields.image) {
    payload.append("image", validateFields.image);
  }

  try {
    const res = await fetch(`${process.env.BASE_URL}/experts`, {
      method: "POST",
      body: payload,
      credentials: "include",
    });

    const expert = await res.json();
    if (!res.ok) {
      console.error("API Error:", expert);
      return { error: expert.message || "Failed to add expert" };
    }

    return { success: true, expert };
    // revalidatePath("/admin/experts");
  } catch (error) {
    console.error("Error in expert adding:", error);
    return { error: "add expert failed" };
  }
};

// delete expert
export const deleteThought = async (id: string) => {
  const res = await fetch(`${process.env.BASE_URL}/experts/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const deleteItem = await res.json();
  if (!res.ok) {
    console.error("API Error:", deleteItem);
    return { error: deleteItem.message || "Failed to deleteItem" };
  }
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/thought");
};
