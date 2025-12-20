import { getServicesDetails } from "@/app/actions/service/fetchService";
import ServiceUpdateFormPage from "@/app/admin/_components/ServiceUpdateForm";

type Props = {
  params: Promise<{ id: string }>;
};
const page = async (props: Props) => {
  const { id } = await props.params;

  const service = await getServicesDetails(id);
  return (
    <div className="w-full h-fit min-h-screen">
      {service && (
        <ServiceUpdateFormPage
          id={service[0]?.id}
          service_name={service[0]?.service_name}
          description={service[0]?.description}
          image={service[0]?.image}
        />
      )}
    </div>
  );
};

export default page;
