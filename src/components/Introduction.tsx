"use client";
import Link from "next/link";

const Introduction = () => {
  const technologies = [
    "Next.js",
    "React.js",
    "Vue.js",
    "JSX",
    "EJS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose ORM",
    "Java",
    "MySQL",
  ];

  return (
    <div className="space-y-5 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl italic antialiased font-serif font-bold animate-bounce">
        Introduction
      </h1>
      <p className="antialiased font-sans text-sm md:text-base lg:text-lg">
        Driven by a passion for development, I&apos;ve dedicated myself to
        learning and growing through multiple internships, including impactful
        roles at{" "}
        <Link href="https://salesine.com" className="font-bold hover:underline">
          Salesine
        </Link>
        ,{" "}
        <Link
          href="https://thesparksfoundationsingapore.org/"
          className="font-bold hover:underline"
        >
          The Sparks Foundation
        </Link>{" "}
        & more. This journey has honed my skills in frontend development using
        technologies like{" "}
        {technologies.slice(0, 5).map((tech, index) => (
          <span key={tech}>
            <b>{tech}</b>
            {index < 4 && ", "}
          </span>
        ))}
        , backend development with{" "}
        {technologies.slice(5, 7).map((tech, index) => (
          <span key={tech}>
            <b>{tech}</b>
            {index < 1 && " and "}
          </span>
        ))}
        , and database management utilizing{" "}
        {technologies.slice(7, 9).map((tech, index) => (
          <span key={tech}>
            <b>{tech}</b>
            {index < 1 && " and "}
          </span>
        ))}
        . Additionally, I&apos;ve built on my foundational knowledge of{" "}
        {technologies.slice(9).map((tech, index) => (
          <span key={tech}>
            <b>{tech}</b>
            {index < 1 && " and "}
          </span>
        ))}
        , further expanding my technical expertise.
      </p>
    </div>
  );
};

export default Introduction;
