"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { addProject } from "@/app/actions/projects/createProjects";

import { useActionState } from "react";

const page = () => {
  const [state, action, isPending] = useActionState(addProject, null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-[700px] ">
        <form
          action={action}
          className="w-full bg-gray-100 dark:bg-gray-800 border rounded-lg flex flex-col gap-4 p-8 "
        >
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="title">Title:</label>

            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.title && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.title?.[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="category">category:</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="category"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.category && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.category?.[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.description && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.description?.[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="link">Project Link:</label>

            <input
              type="text"
              name="link"
              id="link"
              placeholder="Project Link"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.link && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.link?.[0]}
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
            disabled={isPending}
            className="px-3 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
