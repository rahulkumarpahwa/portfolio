import React from "react";

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full w-full text-center p-8 box-border">
      <p className="text-lg sm:text-xl break-words">{children}</p>
    </div>
  );
};

export default Text;
