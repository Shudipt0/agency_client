"use server";
import { revalidatePath } from "next/cache";
import z from "zod";

// validate project_creator data
const project_creatorSchema = z.object({
  product_title: z.string().min(3, "Must be at least 3 characters long"),
  creator_name: z.string().min(3, "Must be at least 3 characters long"),
});

// add project_creator
export const addProject_creator = async (prevState: any, data: FormData) => {
  // validate fields
  const validateFields = project_creatorSchema.safeParse({
    product_title: data.get("product_title") as string,
    creator_name: data.get("creator_name") as string,
  });
  // console.log(validateFields);
  if (!validateFields.success) {
    console.error(
      "Validation errors:",
      validateFields.error.flatten().fieldErrors
    );
    return { errors: validateFields.error.flatten().fieldErrors };
  }

  const project_creator = validateFields.data;

  try {
    const res = await fetch(`http://localhost:5000/api/v1/project_creators`, {
      method: "POST",
      body: JSON.stringify(project_creator),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("API Error:", data);
      return {
        error: data.message || "Project or Member not found!",
      };
    }

    return { success: true, data };
    // revalidatePath("/admin/project_creators");
  } catch (error) {
    console.error("Error in project_creator adding:", error);
    return { error: "add project_creator failed" };
  }

  // console.log("successfully added",addNew);
};

// delete project_creator
export const deleteProject_creator = async (id: string) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/project_creators/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const deleteItem = await res.json();
  if (!res.ok) {
    console.error("API Error:", deleteItem);
    return { error: deleteItem.message || "Failed to deleteItem" };
  }
  // console.log("successfully deleted",deleteItem);
  revalidatePath("/admin/project_creators");
};
