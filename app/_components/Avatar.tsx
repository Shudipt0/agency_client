import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { getMemberDetails } from "../actions/members/fetchMember";

interface Creator {
  name: string;
  creator_id: string;
}

interface Props {
  creators: Creator[];
}

export async function AvatarComponent({ creators }: Props) {
  //   console.log(creators);

  // Fetch all member details in parallel
  const members = await Promise.all(
    creators.map(c => getMemberDetails(c.creator_id))
  );

  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      {members.map( (creator) => {
        // const creator = await getMemberDetails(c.creator_id as string);
        // console.log(creator);
        return (
          <Link
            href={`/about/${creator.id}`}
            key={creator.id}
            className="relative "
          >
            <Avatar className="h-10 w-10 overflow-hidden rounded-full peer ring-2 ring-green-500 ">
              <AvatarImage src={creator.image} alt={creator.name} className="object-cover " />
              <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="min-w-20 absolute -bottom-3 md:-bottom-6 text-[10px] text-white font-thin hidden peer-hover:block ">
              {creator.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
