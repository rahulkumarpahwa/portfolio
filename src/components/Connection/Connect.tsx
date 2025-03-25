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
    // console.log(json);
    setData(json);
  };

  return (
    data != undefined && (
      <div id="connect">
        <h2 className="text-center pt-20 mt-10 text-4xl italic font-serif font-bold antialiased ">
          Connect with Me!
        </h2>
        <div className="flex items-center justify-center gap-10 m-8 py-8 px-4">
          <LinkedinCard />
          <GithubCard data={data} />
          <TwitterCard />
        </div>
      </div>
    )
  );
};

export default Connect;
