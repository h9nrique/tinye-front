import React from "react";
import { Filter } from "./LinkListOrdered";
import { RadioGroup } from "@/components/ui/radio-group";
import FilterRadioItem from "./FilterRadioItem";
import { cn } from "@/lib/utils";

type FiltersProps = {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  className?: string;
};

export default function Filters({
  filter,
  setFilter,
  className,
}: FiltersProps) {
  return (
    <RadioGroup
      defaultValue="comfortable"
      className={cn(className, "gap-x-2 items-center cursor-pointer")}
      onValueChange={(value: Filter) => {
        setFilter(value);
      }}
    >
      <FilterRadioItem value="all" filter={filter} label="Todos os links" />
      <FilterRadioItem value="active" filter={filter} label="Links ativos" />
      <FilterRadioItem
        value="inactive"
        filter={filter}
        label="Links inativos"
      />
    </RadioGroup>
  );
}
