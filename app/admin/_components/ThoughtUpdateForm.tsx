"use client";

import ImageUpload from "@/app/_components/ImageUpload";
import { upDateProject } from "@/app/actions/service/projects";
import { useImageContext } from "@/context/ImageContext";

interface Thoughts {
  id: string;
  experts_name: string;
  bio_data: string;
  thought: string;
  image: string;
}
const ThoughtUpdateFormPage = (thoughts: Thoughts) => {
  const { imageUrl } = useImageContext();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[700px]">
        <form
          action={upDateProject}
          className="w-full bg-green-100 border rounded-lg flex flex-col gap-4 p-8 "
        >
          <input
            type="hidden"
            name="id"
            id="id"
            defaultValue={thoughts?.id}
            readOnly={true}
            className="hidden"
          />
          <label htmlFor="experts_name">Experts Name:</label>
          <input
            type="text"
            name="experts_name"
            id="experts_name"
            defaultValue={thoughts?.experts_name}
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="bio_data">Bio-Data:</label>

          <input
            type="text"
            name="bio_data"
            id="bio_data"
            defaultValue={thoughts?.bio_data}
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <label htmlFor="thought">Thought:</label>
          <textarea
            name="thought"
            id="thought"
            defaultValue={thoughts?.thought}
            className="h-[200px] outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="image">Image: url </label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={imageUrl ?? thoughts?.image}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThoughtUpdateFormPage;
