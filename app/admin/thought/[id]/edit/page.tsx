import { getExpertDetails } from "@/app/actions/experts/fetchExperts";
import ThoughtUpdateFormPage from "@/app/admin/_components/ThoughtUpdateForm";

type Props = {
  params: Promise<{ id: string }>;
};
const ThoughtEditPage = async (props: Props) => {
  const { id } = await props.params;

  const thoughts = await getExpertDetails(id);
  return (
    <div className="w-full h-fit min-h-screen">
      {thoughts && (
        <ThoughtUpdateFormPage
          id={thoughts[0]?.id}
          expert_name={thoughts[0]?.expert_name}
          bio_data={thoughts[0]?.bio_data}
          thought={thoughts[0]?.thought}
          image={thoughts[0]?.image}
        />
      )}
    </div>
  );
};

export default ThoughtEditPage;
