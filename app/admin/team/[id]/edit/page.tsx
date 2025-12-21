import { getMemberDetails } from "@/app/actions/members/fetchMember";
import TeamUpdateFormPage from "@/app/admin/_components/TeamUpdateForm";

type Props = {
  params: Promise<{ id: string }>;
};
const TeamEditPage = async (props: Props) => {
  const { id } = await props.params;

  const teamMember = await getMemberDetails(id);
  return (
    <div className="w-full h-screen">
      {teamMember && (
        <TeamUpdateFormPage
          id={teamMember[0]?.id.toString()}
          name={teamMember[0]?.name}
          profession={teamMember[0]?.profession}
          bio_data={teamMember[0]?.bio_data}
          image={teamMember[0]?.image}
        />
      )}
    </div>
  );
};

export default TeamEditPage;
