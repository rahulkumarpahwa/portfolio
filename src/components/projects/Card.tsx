"use client";
import React, { useState, useEffect } from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export function Card({
  title,
  description,
  imageUrl,
  linkTitle,
  href,
  githubUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  linkTitle: string;
  href: string;
  githubUrl: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title={linkTitle} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black dark:text-white">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black dark:text-white">{description}</span>
          </div>
            <div className="flex flex-1 rounded-lg mt-4 border border-black dark:border-white sm:h-32 md:h-40 lg:h-48 overflow-hidden">
              <Image
              src={imageUrl}
              alt="Logo"
              width={800}
              height={800}
              className="flex flex-1 w-full h-full rounded-lg object-cover object-center"
              />
            </div>
        </div>
      </PinContainer>
    </div>
  );
}
