import React from "react";

export default function Hint({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm ml-1 text-red-500 font-medium transition-all duration-1000 mt-[2px]">
      {children}
    </p>
  );
}
