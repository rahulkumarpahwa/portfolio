import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Data from "@/components/Journey/Data";

export function TimelineDemo() {
  return (
    <div className="w-full mb-20 md:mb-40 px-4 sm:px-6 lg:px-8">
      <Timeline data={Data()} />
    </div>
  );
}
