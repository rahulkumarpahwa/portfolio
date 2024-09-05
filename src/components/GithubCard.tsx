"use client";
import Image from "next/image";
import Link from "next/link";
import { GoPeople } from "react-icons/go";
import { BsDot } from "react-icons/bs";

interface DATA {
  data: {
    html_url: string;
    avatar_url: string;
    name: string;
    bio: string;
    followers: string;
    following: string;
  };
}

const GithubCard = ({ data }: DATA) => {
  return (
    <div className="flex items-start flex-col rounded-lg border border-[#e9e5df] w-1/3 h-[430px]  ">
      <div className="w-full bg-[#e9e5df] rounded-tl-lg rounded-tr-lg p-4 ">
        {" "}
        <Image
          src={"/GitHub_Logo.png"}
          height="1000"
          width="1000"
          className="h-8 w-20"
          alt={"logo"}
        />
      </div>
      <div className="px-4 py-3">
        <Image
          src={data?.avatar_url}
          height="1000"
          width="1000"
          className="w-16 h-16 rounded-full"
          alt={"logo"}
        />
      </div>

      <Link href={data?.html_url} className="font-bold text-xl py-1 px-2">{data?.name}</Link>

      <Link
        href={
          "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Frahulkumarpahwa"
        }
        className="rounded-lg mx-2 py-1 px-2 border text-white border-[#4c5460] w-[90%] text-center  text-grey-500 hover:bg-[#262c36] bg-slate-500"
      >
        Follow
      </Link>

      <p className="p-2">{data?.bio}</p>
      <p className="px-2 py-1 flex items-center">
        <Link
          href={"https://github.com/rahulkumarpahwa?tab=followers"}
          className="flex items-center gap-0.5"
        >
          {" "}
          <GoPeople />
          {data?.followers} followers
        </Link>{" "}
        <BsDot />{" "}
        <Link href={"https://github.com/rahulkumarpahwa?tab=following"}>
          {data?.following} following
        </Link>
      </p>
      <div className="flex flex-col px-2 py-1">
        <Link
          href={"https://github.com/rahulkumarpahwa?tab=achievements"}
          className="font-semibold"
        >
          Achievements
        </Link>
        <Link
          href={
            "https://github.com/rahulkumarpahwa?achievement=pull-shark&tab=achievements"
          }
        >
          <Image
            src={"/shark.png"}
            height="1000"
            width="1000"
            className="h-8 w-8"
            alt={"Pull Shark"}
          />
        </Link>
      </div>
    </div>
  );
};

export default GithubCard;
