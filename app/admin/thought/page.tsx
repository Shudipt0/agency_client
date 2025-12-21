import { DataTable } from "@/app/_components/DataTable";
import { getExperts } from "@/app/actions/experts/fetchExperts";
import { columns } from "@/lib/data/ThoughtColumn";

const ThoughtPage = async () => {
  const experts = await getExperts();
  // console.log(experts)
  return (
    <div className="w-full min-h-screen max-h-fit text-center ">
      <h1 className="text-[22px] font-semibold text-black/80 mt-10 ">
        Experts Table
      </h1>
      <div className="p-5">
        <DataTable data={experts} columns={columns} />
      </div>
    </div>
  );
};

export default ThoughtPage;
