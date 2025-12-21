"use client";

import SingleFileDrop from "@/app/_components/SingleFileDrop";
import { upDateTeamMember } from "@/app/actions/members/updateMember";
import { useActionState } from "react";

interface TeamMember {
  id: string;
  name: string;
  profession: string;
  bio_data: string;
  image: string;
}
const TeamUpdateFormPage = (teamMember: TeamMember) => {
  const [state, action, isPending] = useActionState(upDateTeamMember, null);
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
            defaultValue={teamMember?.id}
            readOnly={true}
            className="hidden"
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={teamMember?.name}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="profession">Profession:</label>

          <input
            type="text"
            name="profession"
            id="profession"
            defaultValue={teamMember?.profession}
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <label htmlFor="bio_data">Bio-Data:</label>
          <textarea
            name="bio_data"
            id="bio_data"
            defaultValue={teamMember?.bio_data}
            className="h-[200px] outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-1 rounded"
          />

          <label htmlFor="image">Image: url </label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            defaultValue={teamMember?.image}
            placeholder="Upload image here"
            className="outline-none border-2 border-gray-300 bg-white dark:bg-gray-600 dark:text-white text-[16px] font-semibold px-5 py-1 rounded"
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

export default TeamUpdateFormPage;
