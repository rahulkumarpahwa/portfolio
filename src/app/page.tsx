import Connect from "@/components/Connection/Connect";
import Introduction from "@/components/Introduction";
import { TimelineDemo } from "@/components/Journey/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#51abb2] dark:bg-black dark:text-white">
      <div className="flex items-center justify-center gap-10 ">
        <Introduction />
        <div className="w-full">
          <Image
            src="/rahul.png"
            alt="Rahul Kumar"
            width={1000}
            height={1000}
            className="w-full"
          />
        </div>
      </div>
      <TimelineDemo />
      <Connect />
    </main>
  );
}
