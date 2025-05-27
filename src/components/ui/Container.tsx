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
        "flex flex-col flex-1 px-4 md:px-8 max-w-[1024px] m-auto w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
}
