import Connect from "@/components/Connection/Connect";
import Introduction from "@/components/Introduction";
import { TimelineDemo } from "@/components/Journey/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 bg-[#51abb2] dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        <Introduction />
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image
            src="/rahul.png"
            alt="Rahul Kumar"
            width={1000}
            height={1000}
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="w-full mt-10">
        <TimelineDemo />
      </div>
      <div className="w-full mt-10">
        <Connect />
      </div>
    </main>
  );
}
