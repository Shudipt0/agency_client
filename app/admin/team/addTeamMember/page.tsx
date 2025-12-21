"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { addTeamMember } from "@/app/actions/members/createTeam";
import { useActionState } from "react";

const page = () => {
  const [state, action, isPending] = useActionState(addTeamMember, null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="w-[700px] ">
        <form
          action={action}
          className="w-full border rounded-lg flex flex-col gap-4 p-8 bg-gray-100 dark:bg-gray-800"
        >
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.name && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.name?.[0]}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="profession">Profession:</label>

            <input
              type="text"
              name="profession"
              id="profession"
              placeholder="Profession"
              className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.profession && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.profession?.[0]}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <label htmlFor="bio_data">Bio-Data:</label>
            <textarea
              name="bio_data"
              id="bio_data"
              placeholder="Bio-data"
              className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-2 rounded"
            />
            {state?.errors?.bio_data && (
              <p className="text-red-500 text-sm mt-1">
                {state?.errors?.bio_data?.[0]}
              </p>
            )}
          </div>
          <div>
            <SingleFileDrop image="image" />
          </div>
          <p className="text-red-500 text-sm mt-1">{state?.error}</p>
          <button
            type="submit"
            disabled={isPending}
            className="px-3 py-2 text-sm text-white font-bold bg-blue-500 hover:bg-blue-700 rounded-lg"
          >
            Add Team Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
