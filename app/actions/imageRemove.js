"use server"
import {utapi} from "../server/uploadthing"

export const imageRemove = async (imageKey) => {
   try{
      await utapi.deleteFiles(imageKey);
      return {success: true};
   }catch(error){
     return {success: false};
   }
}