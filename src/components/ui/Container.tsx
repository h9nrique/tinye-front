import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex flex-col flex-grow px-4 md:px-8 max-w-[1024px] m-auto w-full">
      {children}
    </main>
  );
}
