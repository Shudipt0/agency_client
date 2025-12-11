"use client";

import ImageUpload from "@/app/_components/ImageUpload";
import { addThought } from "@/app/actions/service/thought";


import { useImageContext } from "@/context/ImageContext";
import React, { useActionState } from "react";

const addThoughtPage = () => {
  const [state, action, isPending] = useActionState(addThought, null);
  const { imageUrl } = useImageContext();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-backgroundBanner bg-no-repeat bg-cover">
      <div className="w-[700px] ">
        <form
          action={action}
          className="w-full bg-green-100 border rounded-lg flex flex-col gap-4 p-8 "
        >
          <label htmlFor="experts_name">Experts Name:</label>
          <input
            type="text"
            name="experts_name"
            id="experts_name"
            placeholder="Experts Name"
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="bio_data">Bio-Data:</label>

          <input
            type="text"
            name="bio_data"
            id="bio_data"
            placeholder="Bio-Data"
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <label htmlFor="thought">Thought:</label>
          <textarea
            
            name="thought"
            id="thought"
            placeholder="Thought"
            className="h-[200px] outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="image">Image: url </label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={imageUrl ?? ""}
            placeholder="Upload image here"
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <span>or</span>
          <div>
            <ImageUpload />
          </div>
          <button
            type="submit"
            className="px-3 py-2 text-sm text-white font-bold bg-blue-500 rounded-lg"
          >
            Add Experts Thought
          </button>
        </form>
      </div>
    </div>
  );
};

export default addThoughtPage;
