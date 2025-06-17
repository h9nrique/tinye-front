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
    <Label
      htmlFor={value}
      className={`flex items-center border px-2 py-1 rounded-full duration-300 transition-colors w-full justify-center cursor-pointer ${
        filter === value
          ? "border-blue-800 text-blue-800"
          : "border-gray-400 text-gray-400 hover:border-gray-800 hover:text-gray-800"
      }`}
    >
      <RadioGroupItem value={value} id={value} className="hidden" />
      <p className="text-xs mb-0 text-nowrap">{label}</p>
    </Label>
  );
}
