import { DataTable } from "@/app/_components/DataTable";
import { getContacts } from "@/app/actions/contact/fetchContact";
import { columns } from "@/lib/data/UserContactColumn";

export const dynamic = "force-dynamic";

const UserContactPage = async () => {
  const userContact = await getContacts();
  // console.log(team)
  return (
    <div className="w-full min-h-screen max-h-fit text-center ">
      <h1 className="text-[22px] font-semibold text-black/80 dark:text-white/80 mt-10 ">
        User Contact Table
      </h1>
      <div className="p-5">
        <DataTable data={userContact} columns={columns} />
      </div>
    </div>
  );
};

export default UserContactPage;
