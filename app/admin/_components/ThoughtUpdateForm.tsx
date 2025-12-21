"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { upDateThought } from "@/app/actions/experts/updateExpert";

import { useActionState } from "react";

interface Thoughts {
  id: string;
  expert_name: string;
  bio_data: string;
  thought: string;
  image: string;
}
const ThoughtUpdateFormPage = (thoughts: Thoughts) => {
  const [state, action, isPending] = useActionState(upDateThought, null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[700px]">
        <form
          action={action}
          className="w-full bg-gray-100 dark:bg-gray-800 border rounded-lg flex flex-col gap-4 p-8 "
        >
          <input
            type="hidden"
            name="id"
            id="id"
            defaultValue={thoughts?.id}
            readOnly={true}
            className="hidden"
          />
          <label htmlFor="expert_name">Experts Name:</label>
          <input
            type="text"
            name="expert_name"
            id="expert_name"
            defaultValue={thoughts?.expert_name}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />

          <label htmlFor="bio_data">Bio-Data:</label>

          <input
            type="text"
            name="bio_data"
            id="bio_data"
            defaultValue={thoughts?.bio_data}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />
          <label htmlFor="thought">Thought:</label>
          <textarea
            name="thought"
            id="thought"
            defaultValue={thoughts?.thought}
            className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />

          <label htmlFor="image_url">Image: url </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            defaultValue={thoughts?.image}
            placeholder="Upload image here"
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />
          <span>or</span>
          <div>
            <SingleFileDrop image="image_file" />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="px-3 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThoughtUpdateFormPage;
