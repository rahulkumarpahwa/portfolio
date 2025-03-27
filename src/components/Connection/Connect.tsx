"use client";
import { useEffect, useState } from "react";
import GithubCard from "./GithubCard";
import LinkedinCard from "./LinkedinCard";
import TwitterCard from "./TwitterCard";

const Connect = () => {
  const [data, setData] = useState({
    name: "none",
    html_url: "none",
    avatar_url: "https://avatars.githubusercontent.com/u/56966500?v=4",
    bio: "none",
    followers: "none",
    following: "none",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/rahulkumarpahwa");
    const json = await data.json();
    setData(json);
  };

  return (
    data && (
      <div id="connect" className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-center pt-10 md:pt-20 text-3xl md:text-4xl italic font-serif font-bold antialiased">
          Connect with Me!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8 py-8 px-4">
          <LinkedinCard />
          <GithubCard data={data} />
          <TwitterCard />
        </div>
      </div>
    )
  );
};

export default Connect;
