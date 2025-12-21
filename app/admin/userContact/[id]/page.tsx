import { getContactDetails } from "@/app/actions/contact/fetchContact";
import Link from "next/link";
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

const teamViewPage = async (props: Props) => {
  const { id } = await props.params;

  const userContact = await getContactDetails(id);
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen h-fit">
      <div className="pt-10">
        <Link
          href="/admin"
          className=" text-[24px] text-black/80 font-semibold underline "
        >
          Back
        </Link>
      </div>
      <div className="w-full p-20 space-y-6  ">
        <h1 className="text-2xl font-thin text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm">
          Name: {userContact[0]?.name}
        </h1>
        <p className="text-lg font-thin text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm">
          Email: {userContact[0]?.email}
        </p>
        <p className="text-lg font-thin text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm">
          Phone: {userContact[0]?.phone}
        </p>
        <p className="text-lg font-thin text-black/80 bg-slate-100 px-8 py-3 rounded shadow-sm">
          Message: {userContact[0]?.message}
        </p>
      </div>
    </div>
  );
};

export default teamViewPage;
