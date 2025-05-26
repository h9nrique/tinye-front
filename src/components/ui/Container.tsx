import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={cn(
        "flex flex-col flex-grow px-4 md:px-8 max-w-[1024px] m-auto w-full",
        className
      )}
    >
      {children}
    </main>
  );
}
