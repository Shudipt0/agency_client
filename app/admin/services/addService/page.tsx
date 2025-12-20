"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { addService } from "@/app/actions/service/createService";
import { useActionState } from "react";

const page = () => {
  const [state, action, isPending] = useActionState(addService, null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-[700px] ">
        <form
          action={action}
          className="w-full bg-gray-100 dark:bg-gray-800 border rounded-lg flex flex-col gap-4 p-8 "
        >
          <div>
            <label htmlFor="serviceName">Service Name:</label>
            <input
              type="text"
              name="service_name"
              id="service_name"
              placeholder="Service name"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-1 rounded"
            />
            {state?.errors?.service_name && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.service_name?.[0]}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="description">Description:</label>

            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-1 rounded"
            />
            {state?.errors?.description && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.description?.[0]}
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

          <button
            type="submit"
            disabled={isPending}
            className="px-3 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
