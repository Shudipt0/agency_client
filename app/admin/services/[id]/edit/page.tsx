import ServiceUpdateFormPage from "@/app/admin/_components/ServiceUpdateForm";
import { prisma } from "@/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};
const page = async (props: Props) => {
  const { id } = await props.params;

  const service = await prisma.service.findUnique({
    where: { id: Number(id) },
  });
  return (
    <div className="w-full h-fit bg-backgroundBanner bg-no-repeat bg-cover">
      {service && (
        <ServiceUpdateFormPage
          id={service.id.toString()}
          serviceName={service.serviceName}
          description={service.description}
          image={service.image}
        />
      )}
    </div>
  );
};

export default page;
