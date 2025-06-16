import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function LinksListsSkeleton() {
  return (
    <>
      <Skeleton className="w-full h-24 mb-2 bg-gray-300" />
      <Skeleton className="w-full h-24 mb-2 bg-gray-300" />
      <Skeleton className="w-full h-24 mb-2 bg-gray-300" />
    </>
  );
}
