import React from "react";
import { Filter } from "./LinkListOrdered";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

type FilterRadioItemProps = {
  value: Filter;
  filter: Filter;
  label: string;
};

export default function FilterRadioItem({
  value,
  filter,
  label,
}: FilterRadioItemProps) {
  return (
    <div
      className={`flex items-center border px-2 py-1 rounded-full duration-300 transition-colors w-full justify-center  ${
        filter === value
          ? "border-blue-800 text-blue-800"
          : "border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800"
      }`}
    >
      <RadioGroupItem value={value} id={value} className="hidden" />
      <Label
        htmlFor={value}
        className="text-xs mb-0 cursor-pointer text-nowrap"
      >
        {label}
      </Label>
    </div>
  );
}
