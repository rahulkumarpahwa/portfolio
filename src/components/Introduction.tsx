"use client";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-5xl italic antialiased font-serif font-bold animate-bounce">
        Introduction
      </h1>
      <p className="antialiased font-sans">
        A dedicated <b>SDE Intern</b> currently honing my skills at{" "}
        <Link href="https://salesine.com" className="font-bold hover:underline">
          Salesine
        </Link>
        . With a strong foundation in frontend development using technologies
        like <b>Next.js</b>, <b>React.js</b>, <b>Vue.js</b>, <b>JSX</b>, and{" "}
        <b>EJS</b>, I&apos;ve also gained valuable experience in backend
        development with <b>Node.js</b> and <b>Express.js</b>. My proficiency
        extends to database management, utilizing <b>MongoDB</b> and{" "}
        <b>Mongoose ORM</b>. Prior to my current role, I&apos;ve worked with{" "}
        <b>Java</b> and <b>MySQL</b>, further expanding my technical expertise.
      </p>
    </div>
  );
};

export default Introduction;
