"use client";

import { addProject_creator } from "@/app/actions/project_creators/create";
import { useActionState } from "react";

const page = () => {
  const [state, action, isPending] = useActionState(addProject_creator, null);
  //   console.log(state?.error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-[700px] ">
        <form
          action={action}
          className="w-full bg-gray-100 dark:bg-gray-800 border rounded-lg flex flex-col gap-4 p-8 "
        >
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="product_title">Product Title:</label>
            <input
              type="text"
              name="product_title"
              id="product_title"
              placeholder="Product title"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.product_title && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.product_title?.[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="creator_name">Creator Name:</label>

            <input
              type="text"
              name="creator_name"
              id="creator_name"
              placeholder="Creator name"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.creator_name && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.creator_name?.[0]}
              </p>
            )}
          </div>
          <p className="text-red-500 text-sm mt-1">{state?.error}</p>
          <button
            type="submit"
            disabled={isPending}
            className="px-3 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            Add Relation
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
