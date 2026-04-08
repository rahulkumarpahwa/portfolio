'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { PinContainer } from '../ui/3d-pin';

export function Card({
  title,
  description,
  imageUrl,
  linkTitle,
  href,
}: {
  title: string;
  description: string;
  imageUrl: string;
  linkTitle: string;
  href: string;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex h-[40rem] w-full items-center justify-center">
      <PinContainer title={linkTitle} href={href}>
        <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
          <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-black dark:text-white">
            {title}
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-black dark:text-white">{description}</span>
          </div>
          <div className="mt-4 flex flex-1 overflow-hidden rounded-lg border border-black sm:h-32 md:h-40 lg:h-48 dark:border-white">
            <Image
              src={imageUrl}
              alt="Logo"
              width={800}
              height={800}
              className="flex h-full w-full flex-1 rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
