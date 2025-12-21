"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { upDateService } from "@/app/actions/service/updateService";

import { useActionState } from "react";

interface Service {
  id: string;
  service_name: string;
  description: string;
  image: string;
}
const ServiceUpdateFormPage = (service: Service) => {
  const [state, action, isPending] = useActionState(upDateService, null);
  // console.log(service);

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
            defaultValue={service?.id}
            readOnly={true}
            className="hidden"
          />
          <label htmlFor="service_name">Service Name:</label>
          <input
            type="text"
            name="service_name"
            id="service_name"
            defaultValue={service?.service_name}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />

          <label htmlFor="description">Description:</label>

          <textarea
            name="description"
            id="description"
            defaultValue={service?.description}
            className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
          />

          <label htmlFor="image_url">Image: url </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            defaultValue={service?.image}
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

export default ServiceUpdateFormPage;
