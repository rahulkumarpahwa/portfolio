"use client";
import React from "react";

interface VideoProps {
  url: string;
  title: string;
}

const Reels: React.FC<VideoProps> = ({ url, title }) => {
  return (
    <div className="text-center p-5">
      <div className="mx-auto">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <div className="bg-black rounded-lg overflow-hidden inline-block">
          {/* Display video at its original size */}
          <video src={url} controls loop autoPlay muted className="block" />
        </div>
      </div>
    </div>
  );
};

export default Reels;
