"use client";

import ImageUpload from "@/app/_components/ImageUpload";
import { upDateService } from "@/app/actions/service/service";
import { upDateTeamMember } from "@/app/actions/service/team";
import { useImageContext } from "@/context/ImageContext";

interface TeamMember {
  id: string;
  name: string
  profession: string;
  bio_data: string;
  image: string;
}
const TeamUpdateFormPage = (teamMember: TeamMember) => {
  const { imageUrl } = useImageContext();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[700px]">
        <form
          action={upDateTeamMember}
          className="w-full bg-green-100 border rounded-lg flex flex-col gap-4 p-8 "
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
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />

           <label htmlFor="profession">Profession:</label>

          <input
            type="text"
            name="profession"
            id="profession"
            defaultValue={teamMember?.profession}
            className="outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />
          <label htmlFor="bio_data">Bio-Data:</label>
          <textarea
            
            name="bio_data"
            id="bio_data"
            defaultValue={teamMember?.bio_data}
            className="h-[200px] outline-none border-2 border-gray-300 bg-white text-[16px] font-semibold px-5 py-1 rounded"
          />


          <label htmlFor="image">Image: url </label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={imageUrl ?? teamMember?.image}
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

export default TeamUpdateFormPage;
