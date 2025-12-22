import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { getMembers } from "../actions/members/fetchMember";

export async function AnimatedTestimonialsDemo() {
  // fetching data from the database
  const teamMembers = await getMembers();
  // console.log("Team Members:", teamMembers);

  if (!teamMembers || teamMembers.length === 0) {
    return <div>No testimonials available</div>;
  }
  const testimonials = teamMembers.map((member: any) => ({
    id: member.id,
    name: member.name,
    designation: member.profession,
    src: member.image,
  }));
  return <AnimatedTestimonials testimonials={testimonials} />;
}
