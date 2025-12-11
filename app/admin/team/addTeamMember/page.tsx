"use client";

import ImageUpload from "@/app/_components/ImageUpload";
import { addTeamMember } from "@/app/actions/service/team";
import { useImageContext } from "@/context/ImageContext";
import React, { useActionState } from "react";

const page = () => {
  const [state, action, isPending] = useActionState(addTeamMember, null);
  const { imageUrl } = useImageContext();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-backgroundBanner bg-no-repeat bg-cover">
      <div className="w-[700px] ">
        <form
          action={action}
          className="w-full border rounded-lg flex flex-col gap-4 p-8 bg-green-100 "
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="profession">Profession:</label>

          <input
            type="text"
            name="profession"
            id="profession"
            placeholder="Profession"
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <label htmlFor="bio_data">Bio-Data:</label>
          <textarea
            
            name="bio_data"
            id="bio_data"
            placeholder="Bio-data"
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
            Add Team Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
