import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-start flex-1 px-4 py-6 md:px-8 max-w-[1024px] mx-auto w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
}
