import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Data from "@/components/Journey/Data";

export function TimelineDemo() {
  return (
    <div className="w-full mb-40">
      <Timeline data={Data()} />
    </div>
  );
}
