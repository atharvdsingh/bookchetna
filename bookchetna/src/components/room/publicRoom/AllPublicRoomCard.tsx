import { Users, LogIn, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";

type RoomCardProps = {
  roomName: string;
  creator: string;
  membersCount: number;
  joined?: boolean;
  roomId: number;
};

export default function AllPublicRoomCard({
  roomName ="athar" ,
  creator="atharv",
  membersCount=30,
  joined = false,
  roomId=325248,
}: RoomCardProps) {
  return (
    <Card className="border-primary/50 p-4">
      <div className="flex items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-primary" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="line-clamp-1 font-medium">{roomName}</h3>

              {joined && (
                <Badge variant="secondary" className="text-xs">
                  Joined
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              Created by {creator}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 shrink-0">
          <Badge variant="secondary" className="text-xs">
            {membersCount} <p className="hidden md:block" >
               members 
              </p>
              <Users/>
          </Badge>

          {/* Server-safe navigation */}
          <Link
            href={`/room/${roomId}`}
            className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 rounded-md"
          >
            <LogIn className="w-4 h-4" />
            <p className="hidden md:flex" >

            Enter
            </p>
          </Link>
        </div>

      </div>
    </Card>
  );
}
