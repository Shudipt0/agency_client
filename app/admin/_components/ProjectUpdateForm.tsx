"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { upDateProject } from "@/app/actions/projects/updateProject";
import { useActionState } from "react";

interface Projects {
  id: string;
  category: string;
  title: string;
  link: string;
  description: string;
  image: string;
}
const ProjectUpdateFormPage = (projects: Projects) => {
  const [state, action, isPending] = useActionState(upDateProject, null);

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
            defaultValue={projects?.id}
            readOnly={true}
            className="hidden"
          />
          <label htmlFor="category">category:</label>
          <input
            type="text"
            name="category"
            id="category"
            defaultValue={projects?.category}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />

          <label htmlFor="title">Title:</label>

          <input
            type="text"
            name="title"
            id="title"
            defaultValue={projects?.title}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />
          <label htmlFor="link">Project Link:</label>
          <input
            type="text"
            name="link"
            id="link"
            defaultValue={projects?.link}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            defaultValue={projects?.description}
            className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />

          <label htmlFor="image_url">Image: url </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            defaultValue={projects?.image}
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

export default ProjectUpdateFormPage;
