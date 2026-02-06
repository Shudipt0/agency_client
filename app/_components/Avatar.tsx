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

export function AvatarComponent({ creators }: Props) {
  //   console.log(creators);
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      {creators.map(async (c) => {
        const creator = await getMemberDetails(c.creator_id as string);
        // console.log(creator);
        return (
          <Link
            href={`/about/${creator[0].id}`}
            key={c.creator_id}
            className="relative "
          >
            <Avatar className="h-10 w-10 overflow-hidden rounded-full peer ring-2 ring-green-500 ">
              <AvatarImage src={creator[0].image} alt={creator[0].name} className="object-cover " />
              <AvatarFallback>{creator[0].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="min-w-20 absolute -bottom-3 md:-bottom-6 text-[10px] text-white font-thin hidden peer-hover:block ">
              {creator[0].name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
