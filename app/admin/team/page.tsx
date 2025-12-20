import { DataTable } from "@/app/_components/DataTable";
import { getMembers } from "@/app/actions/members/fetchMember";
import { columns } from "@/lib/data/TeamColumn";

const TeamPage = async () => {
  const members = await getMembers();
  // console.log(team)
  return (
    <div className="w-full min-h-screen max-h-fit text-center bg-backgroundBanner bg-no-repeat bg-cover">
      <h1 className="text-[22px] font-semibold text-black/80 mt-10 ">
        Team Table
      </h1>
      <div className="p-5">
        <DataTable data={members} columns={columns} />
      </div>
    </div>
  );
};

export default TeamPage;
