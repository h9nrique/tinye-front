import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinkType } from "@/types/links/LinkType";

export default function LinkQuantityDisplay({
  linkList,
}: {
  linkList: LinkType[];
}) {
  const reachedMaximunQuantity = linkList.length >= 10;

  return (
    <div className="flex items-center">
      <p
        className={`${
          reachedMaximunQuantity ? "text-red-500" : "text-gray-500"
        } font-medium`}
      >
        {linkList.length}/10 links
      </p>
      <Tooltip>
        <TooltipTrigger asChild>
          <IoMdInformationCircle
            className={`ml-1 text-gray-500 ${
              reachedMaximunQuantity ? "text-red-500" : "text-gray-500"
            }`}
            size={16}
          />
        </TooltipTrigger>
        <TooltipContent align="end" side="bottom" className="bg-primary">
          <p>No plano básico, o limite é de 10 links</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
