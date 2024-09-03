"use client";
import Image from "next/image";
import Link from "next/link";

interface DATA {
  data: {
    html_url: string;
    avatar_url: string;
    name: string;
    bio: string;
    twitter_username: string;
  };
}

const GithubCard = ({ data }: DATA) => {
  return (
    <div className="border border-gray-500 hover:border-white max-w-[17rem] rounded-lg">
      <Link href={data?.html_url ? data?.html_url : "none"}>
        <Image
          src={data?.avatar_url}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-tl-lg rounded-tr-lg"
          alt={data?.name}
        />
        <div className="p-2">
          <h2 className="text-xl text-center text-bold ">{data.name}</h2>
          <p className="text-gray-500 hover:text-white">{data.bio}</p>
          <div className="text-gray-500 hover:text-white">
            X :{" "}
            <Link
              href={`https://twitter.com/${data.twitter_username}`}
              target="_blank"
            >
              @rahulkumarpahwa
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GithubCard;
