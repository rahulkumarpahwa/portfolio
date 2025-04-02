"use client";
import Image from "next/image";
import Link from "next/link";

const LinkedinCard = () => {
  return (
    <div className="flex items-start flex-col rounded-lg border border-[#e9e5df] w-full max-w-sm h-[500px]">
      <div className="w-full bg-[#e9e5df] rounded-tl-lg rounded-tr-lg p-4">
        <Image
          src={"./linkedin.svg"}
          height="1000"
          width="1000"
          className="h-[1.75rem]"
          alt={"logo"}
        />
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
      <Link
        target="_blank"
        href={
          "https://in.linkedin.com/in/rahulkumarpahwa?trk=public-profile-badge-profile-badge-profile-name"
        }
        className="font-bold text-xl py-1 px-2 hover:underline"
      >
        Rahul K.
      </Link>
      <p className="p-2">
        Ex- Intern @salesine | Next.js | React.js | Redux-Toolkit | Tailwind CSS
        | Node.js | Express.js | MongoDB | HTML5 | CSS3 | JavaScript | Git |
        Github | Open to New Opportunities
      </p>
      <p className="px-2 py-1">
        <Link
          className="hover:underline"
          target="_blank"
          href={
            "https://www.linkedin.com/company/salesine?trk=public-profile-badge-profile-badge_company-name"
          }
        >
          salesine
        </Link>{" "}
        |{" "}
        <Link
          className="hover:underline"
          target="_blank"
          href={
            "https://www.linkedin.com/school/panjab-university-chandigarh/?trk=public-profile-badge-profile-badge_school-name"
          }
        >
          Panjab University, Chandigarh
        </Link>
      </p>
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

export default LinkedinCard;
