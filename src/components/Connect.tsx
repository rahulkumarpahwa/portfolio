"use client";
import { useEffect, useState } from "react";
import GithubCard from "./GithubCard";
import LinkedinCard from "./LinkedinCard";

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
      <div className="flex items-center justify-center gap-10 m-8 py-8 px-4">
        <LinkedinCard />
        {/* <LinkedinCard />
        <LinkedinCard /> */}
        {/* {/* <GithubCard data={data} /> */}
        <GithubCard data={data} />
        {/* <GithubCard data={data} /> */}
      </div>
    )
  );
};

export default Connect;
