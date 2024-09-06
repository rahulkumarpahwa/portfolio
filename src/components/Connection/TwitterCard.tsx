"use client";
import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";

const TwitterCard = () => {
  return (
    <div className="flex items-start flex-col rounded-lg border border-[#e9e5df] w-1/3 h-[450px]  ">
      <div className="float-left w-full bg-[#e9e5df] rounded-tl-lg rounded-tr-lg p-4">
        <div>
          <Image
            src={"/x.png"}
            height="1000"
            width="1000"
            className="h-8 w-8"
            alt={"logo"}
          />
        </div>
      </div>
      <div className="px-4 py-3">
        <Image
          src={"/rahul.png"}
          height="1000"
          width="1000"
          className="w-16 h-16"
          alt={"logo"}
        />
      </div>
      <div className="flex justify-between items-center">
        <Link
          href={"https://x.com/rahulkumarpahwa"}
          className="font-bold text-xl py-1 px-2 pr-3"
        >
          Rahul Kumar
        </Link>
        <Link
          target="_blank"
          href={"https://x.com/rahulkumarpahwa"}
          className="rounded-full text px-3 py-2 mr-1 text-black font-bold  text-center  hover:bg-[#f8f2f2] bg-white"
        >
          Follow
        </Link>
      </div>
      <p className="p-2 my-3">
        MERN Stack Developer, React.js, Parcel, JSX, EJS, Node.js, Express.js,
        MongoDB | Looking for Internships/full time opportunities |
        <Link
          href={"https://x.com/search?q=%23LearnInPublic&src=hashtag_click"}
        >
          #LearnInPublic
        </Link>
      </p>
      <div className="flex items-center gap-1 px-2 my-1">
        <SlCalender /> <p>Joined March 2017</p>
      </div>
      <div className="py-2 px-2">
        <p className="py-1 flex items-center gap-2">
          <Link
            target="_blank"
            href={"https://x.com/rahulkumarpahwa/following"}
            className="flex items-center gap-0.5 hover:underline"
          >
            {" "}
            <b>{224}</b> following
          </Link>{" "}
          <Link
            href={"https://x.com/rahulkumarpahwa/verified_followers"}
            target="_blank"
            className="hover:underline"
          >
            <b>{25}</b> followers
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TwitterCard;
