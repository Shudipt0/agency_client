
import ThoughtUpdateFormPage from '@/app/admin/_components/ThoughtUpdateForm'
import { prisma } from '@/lib/utils'

import React from 'react'


type Props = {
    params: Promise<{id: string}>
}
 const ThoughtEditPage = async (props: Props) => {
       const {id} = await props.params;

    const thoughts = await prisma.thought.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div className="w-full h-fit bg-backgroundBanner bg-no-repeat bg-cover">
     {thoughts && (
        <ThoughtUpdateFormPage
          id={thoughts.id.toString()}
          experts_name={thoughts.experts_name}
          bio_data={thoughts.bio_data}
          thought={thoughts.thought}
          image={thoughts.image}
        />
      )}
    </div>
  )
}

export default ThoughtEditPage