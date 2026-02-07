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

// validate member data
const memberSchema = z.object({
  name: z
    .string()
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be at most 50 characters long"),
  profession: z.string().min(10, "Must be at least 10 characters long"),
  bio_data: z.string().min(10, "Must be at least 10 characters long"),
  image: imageSchema.optional(),
});

// add service
export const addTeamMember = async (prevState: any, data: FormData) => {
  // validate fields
  const parsed = memberSchema.safeParse({
    name: data.get("name") as string,
    profession: data.get("profession") as string,
    bio_data: data.get("bio_data") as string,
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
  payload.append("name", validateFields.name);
  payload.append("profession", validateFields.profession);
  payload.append("bio_data", validateFields.bio_data);
  if (validateFields.image) {
    payload.append("image", validateFields.image);
  }

  try {
    const res = await fetch(`${process.env.BASE_URL}/users`, {
      method: "POST",
      body: payload,
      credentials: "include",
    });

    const member = await res.json();
    if (!res.ok) {
      console.error("API Error:", member);
      return { error: member.message || "Failed to add member" };
    }

    return { success: true, member };
  } catch (error) {
    console.error("Error in service adding:", error);
    return { error: "add service failed" };
  }
};

// delete service
export const deleteTeamMember = async (id: string) => {
  const res = await fetch(`${process.env.BASE_URL}/users/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const deleteItem = await res.json();
  if (!res.ok) {
    console.error("API Error:", deleteItem);
    return { error: deleteItem.message || "Failed to deleteItem" };
  }
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/team");
};
