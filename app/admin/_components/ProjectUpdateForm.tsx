"use client";

import ImageUpload from "@/app/_components/ImageUpload";
import { upDateProject } from "@/app/actions/service/projects";
import { useImageContext } from "@/context/ImageContext";

interface Projects {
  id: string;
  category: string;
  title: string;
  link: string;
  description: string;
  image: string;
}
const ProjectUpdateFormPage = (projects: Projects) => {
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
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="title">Title:</label>

          <input
            type="text"
            name="title"
            id="title"
            defaultValue={projects?.title}
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <label htmlFor="link">Project Link:</label>
          <input
            type="text"
            name="link"
            id="link"
            defaultValue={projects?.link}
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            defaultValue={projects?.description}
            className="h-[200px] outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="image">Image: url </label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={imageUrl ?? projects?.image}
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

export default ProjectUpdateFormPage;
