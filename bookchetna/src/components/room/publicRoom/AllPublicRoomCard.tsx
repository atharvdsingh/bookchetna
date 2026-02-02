import { Users, LogIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import type { roomTypeForCardWithName } from "@/types/databaseRoutesType";
import JoinRoom from "./JoinRoom";

type Props = {
  room: roomTypeForCardWithName;
};

export default function AllPublicRoomCard({ room }: Props) {
  const membersCount = room.members.length;

  const admin = room.members.find((m) => m.roomRole === "ADMIN");

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
              <h3 className="line-clamp-1 font-medium">{room.roomName}</h3>
            </div>

            <p className="text-sm text-muted-foreground">
              Created by {admin?.member.name ?? "Unknown"}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 shrink-0">
          <Badge
            variant="secondary"
            className="text-xs flex items-center gap-1"
          >
            {membersCount}
            <span className="hidden md:block">members</span>
            <Users className="w-3 h-3" />
          </Badge>

          <JoinRoom roomId={room.id} />
        </div>
      </div>
    </Card>
  );
}
