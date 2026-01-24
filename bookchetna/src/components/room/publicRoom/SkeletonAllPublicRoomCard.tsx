import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AllPublicRoomCardSkeleton() {
  return (
    <Card className="border-primary/50 p-4">
      <div className="flex items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Icon */}
          <Skeleton className="w-10 h-10 rounded-full" />

          <div className="min-w-0 space-y-2">
            {/* Room name */}
            <Skeleton className="h-4 w-32" />

            {/* Creator */}
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Members badge */}
          <Skeleton className="h-5 w-20 rounded-md" />

          {/* Enter button */}
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>

      </div>
    </Card>
  );
}
