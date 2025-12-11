import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { prisma } from "@/lib/utils";

export async function AnimatedTestimonialsDemo() {
// fetching data from the database
  const teamMembers = await prisma.team.findMany();
  // console.log("Team Members:", teamMembers);

  if (!teamMembers || teamMembers.length === 0) {
    return <div>No testimonials available</div>;
  }
  const testimonials = teamMembers.map(member => ({
    name: member.name,
    designation: member.profession,
    src: member.image,
  }));
  return <AnimatedTestimonials testimonials={testimonials} />;
}
