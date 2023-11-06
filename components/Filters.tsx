"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { filters } from "@/constants";

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
    <ul className="text-gray-300 body-text flex-between xs:flex-evenly sm:flex-center flex-wrap w-full sm:gap-4 lg:gap-7 mt-4 sm:mt-6 sm:pb-4 sm:max-w-2xl">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`${filter == category && "gradient_blue"} ${
            filter !== category && "hover:bg-slate-800"
          } whitespace-nowrap rounded-lg px-1 xs:px-3 sm:px-6 py-2 sm:py-2.5 capitalize text-sm sm:text-base transition-all`}
        >
          {filter}
        </button>
      ))}
    </ul>
  );
};
export default Filters;
