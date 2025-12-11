
import TeamUpdateFormPage from '@/app/admin/_components/TeamUpdateForm'
import { prisma } from '@/lib/utils'



type Props = {
    params: Promise<{id: string}>
}
 const TeamEditPage = async (props: Props) => {
       const {id} = await props.params;

    const teamMember = await prisma.team.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div className="w-full h-screen bg-backgroundBanner bg-no-repeat bg-cover">
    {teamMember && (
        <TeamUpdateFormPage
          id={teamMember.id.toString()}
          name={teamMember.name}
          profession={teamMember.profession}
          bio_data={teamMember.bio_data}
          image={teamMember.image}
        />
      )}
    </div>
  )
}

export default TeamEditPage