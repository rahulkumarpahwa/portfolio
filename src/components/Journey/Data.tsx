import Image from "next/image";
import React from "react";
import Link from "next/link";

const Data = () => {
  return [
    {
      title: "Sept, 2024 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Accepted into MCA 2024 program, Department of Computer Science and
            Applications, Panjab University, Chandigarh.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743647690/portfolio/pu-gandhi-bhawan_qhij5d.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "July, 2024 - Jan, 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Worked as a Software Engineer Intern at{" "}
            <Link
              href="https://salesine.com"
              className="font-bold hover:underline"
            >
              Salesine
            </Link>
            , contributing to the development of web applications using modern
            technologies. Designed and implemented scalable solutions, optimized
            front-end performance, and collaborated with cross-functional teams
            to improve user experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743588056/portfolio/salesine_lyp3tz.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "July, 2024 - Aug, 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Gained experience as a Web Developer and Designer at{" "}
            <Link
              href="https://thesparksfoundationsingapore.org/"
              className="font-bold hover:underline"
            >
              The Sparks Foundation
            </Link>
            , focusing on UI/UX and front-end development. Built interactive web
            pages, enhanced accessibility, and improved overall design
            responsiveness for better user engagement.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743588060/portfolio/sparks_x4ufzp.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April, 2024 - May, 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Web Development and Designing Intern at{" "}
            <Link
              href="https://techaintern.com/"
              className="font-bold hover:underline"
            >
              TECH-A-INTERN
            </Link>
            , enhancing skills in front-end and responsive web design. Developed
            user-friendly interfaces, optimized website performance, and
            implemented responsive design for various devices.
          </p>
          {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg">
              <Image
                src="/checkmark.png"
                alt=""
                width={500}
                height={500}
                className="w-5"
              />{" "}
              Completed My Graduation.
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dwtcjjxwc/image/upload/v1743588056/portfolio/techaintern_pmfqx4.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mar, 2024 - April, 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Full Stack Developer Intern at{" "}
            <Link
              href="https://www.linkedin.com/company/bharat-intern/"
              className="font-bold hover:underline"
            >
              Bharat Intern
            </Link>{" "}
            working on back-end and database management using MERN stack
            technologies. Created RESTful APIs, managed cloud-based databases,
            and integrated front-end and back-end components for seamless
            functionality.
          </p>
          {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-lg">
              <Image
                src="/checkmark.png"
                alt=""
                width={500}
                height={500}
                className="w-5"
              />{" "}
              Completed My Graduation.
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
};

export default Data;
