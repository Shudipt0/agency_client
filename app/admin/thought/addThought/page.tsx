"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { addThought } from "@/app/actions/experts/createExpert";

import { useActionState } from "react";

const addThoughtPage = () => {
  const [state, action, isPending] = useActionState(addThought, null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-[700px] ">
        <form
          action={action}
          className="w-full bg-gray-100 dark:bg-gray-800 border rounded-lg flex flex-col gap-4 p-8 "
        >
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="expert_name">Experts Name:</label>
            <input
              type="text"
              name="expert_name"
              id="expert_name"
              placeholder="Experts Name"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.expert_name && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.expert_name?.[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="bio_data">Bio-Data:</label>

            <input
              type="text"
              name="bio_data"
              id="bio_data"
              placeholder="Bio-Data"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.bio_data && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.bio_data?.[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="thought">Thought:</label>
            <textarea
              name="thought"
              id="thought"
              placeholder="Thought"
              className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.thought && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.thought?.[0]}
              </p>
            )}
          </div>
          <div>
            <SingleFileDrop image="image" />
            {state?.errors?.image && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.image?.[0]}
              </p>
            )}
          </div>
          <p className="text-red-500 text-sm mt-1">{state?.error}</p>
          <button
            type="submit"
            className="px-3 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            Add Experts Thought
          </button>
        </form>
      </div>
    </div>
  );
};

export default addThoughtPage;
