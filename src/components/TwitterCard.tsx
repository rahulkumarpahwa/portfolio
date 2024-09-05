"use client";
import Image from "next/image";
import Link from "next/link";

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
      <p className="font-bold text-xl py-1 px-2">Rahul K.</p>
      <p className="p-2">
        SDE Intern @salesine | Next.js | React.js | Redux-Toolkit | Tailwind CSS
        | Node.js | Express.js | MongoDB | HTML5 | CSS3 | JavaScript | Git |
        Github | Open to New Opportunities
      </p>
      <p className="px-2 py-1">salesine | Panjab University, Chandigarh</p>
      <div className="py-2 px-2">
        <Link
          target="_blank"
          href={
            "https://in.linkedin.com/in/rahulkumarpahwa?trk=public-profile-badge-profile-badge-view-profile-cta"
          }
          className="rounded-2xl border font-bold border-[#0a66c2] px-3 py-2 text-[#0a66c2] hover:border-2 hover:shadow-inner shadow-[#83bcf4]"
        >
          View profile
        </Link>
      </div>
    </div>
  );
};

export default TwitterCard;
