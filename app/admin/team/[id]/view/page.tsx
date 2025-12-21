import { getMemberDetails } from "@/app/actions/members/fetchMember";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

const teamViewPage = async (props: Props) => {
  const { id } = await props.params;

  const teamMember = await getMemberDetails(id);
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="text-[24px] font-semibold text-black/80 dark:text-white/80 pt-10 underline ">
        <Link href="/admin/team">Back</Link>
      </div>
      <div className="w-full p-20 space-y-6 ">
        <h4 className="text-lg font-semibold text-black/60 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          Id: {teamMember[0]?.id}
        </h4>
        <h1 className="text-2xl font-thin text-black/80 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          Name: <span>{teamMember[0]?.name}</span>
        </h1>
        <p className="text-lg font-thin text-black/60 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          Profession: <span> {teamMember[0]?.profession}</span>
        </p>
        <p className="text-lg font-thin text-black/60 dark:text-white/80 bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded shadow-sm">
          Bio_data: <span> {teamMember[0]?.bio_data}</span>
        </p>
        {teamMember[0]?.image && (
          <div className="w-full flex justify-center bg-slate-100 dark:bg-slate-800 p-5 rounded shadow-sm">
            <Image
              src={teamMember[0]?.image}
              alt="image"
              width={300}
              height={200}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default teamViewPage;
