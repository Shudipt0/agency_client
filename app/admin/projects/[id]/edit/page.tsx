
import ProjectUpdateFormPage from '@/app/admin/_components/ProjectUpdateForm'
import { prisma } from '@/lib/utils'

import React from 'react'


type Props = {
    params: Promise<{id: string}>
}
 const ProjectEditPage = async (props: Props) => {
       const {id} = await props.params;

    const projects = await prisma.project.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div className="w-full h-fit bg-backgroundBanner bg-no-repeat bg-cover">
     {projects && (
        <ProjectUpdateFormPage
          id={projects.id.toString()}
          category={projects.category}
          title={projects.title}
          link={projects.link}
          description={projects.description}
          image={projects.image}
        />
      )}
    </div>
  )
}

export default ProjectEditPage