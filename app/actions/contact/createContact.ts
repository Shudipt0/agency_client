'use server'
import { prisma } from '@/lib/utils';
import {z} from 'zod'

const formSchema = z.object({
    name: z.string().min(1).max(12),
    email: z.string().email(),
    phone: z.string().min(11).max(11),
    message:z.string().min(10).max(50),
})

export const createContact = async (prevSate: any, formData: FormData) => {
    // validattion
    const validatedFields = formSchema.safeParse({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
    });

         // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log("error", validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  };

  const addNew = await prisma.contact.create({
    data: {
        name: validatedFields.data.name as string,
        email: validatedFields.data.email as string,
        phone: validatedFields.data.phone as string,
        message: validatedFields.data.message as string,
    }
  });
//   console.log(addNew)
}