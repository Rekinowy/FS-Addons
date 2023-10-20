"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const filters = ["all", "airports", "aircrafts", "misc", "utilities"];

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const handleFilter = (filter: string) => {
    let newUrl = "";

    if (category === filter) {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category", "page"],
        value: null,
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: filter.toLowerCase(),
        keysToRemove: ["page"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className="text-gray-300 body-text no-scrollbar flex-between xs:flex-center flex-wrap w-full xs:gap-4 pt-6 sm:pb-4 sm:max-w-2xl">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`${
            filter == category && "gradient_blue"
          } whitespace-nowrap rounded-lg px-3 sm:px-6 py-2.5 capitalize text-sm sm:text-base`}
        >
          {filter}
        </button>
      ))}
    </ul>
  );
};
export default Filters;
