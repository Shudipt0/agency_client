import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Creator {
  name: string;
  creator_id: number;
}

interface Props {
  creators: Creator[];
}

export function AvatarComponent({ creators }: Props) {
  //   console.log(creators);
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      {creators.map((creator) => {
        return (
          <Avatar key={creator.creator_id}>
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      })}
    </div>
  );
}
