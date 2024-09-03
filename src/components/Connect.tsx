"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Connect = () => {
  const [data, setData] = useState({
    name: "none",
    html_url: "none",
    avatar_url: "https://avatars.githubusercontent.com/u/56966500?v=4",
    bio: "none",
    twitter_username: "none",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/rahulkumarpahwa");
    const json = await data.json();
    // console.log(json);
    setData(json);
  };
  return (
    data != undefined && (
      <div className="flex items-center justify-center gap-10">
        <div className="border border-gray-500 hover:border-white max-w-[17rem] rounded-lg">
          <Link href={data?.html_url ? data.html_url : "none"}>
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
      </div>
    )
  );
};

export default Connect;
