"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { filters } from "@/constants";
import Image from "next/image";

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams ? searchParams.get("category") : "";

  const handleFilter = (filter: string) => {
    let newUrl = "";

    if (category === filter) {
      newUrl = formUrlQuery({
        params: searchParams ? searchParams.toString() : "",
        keysToRemove: ["category", "page"],
        value: null,
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams ? searchParams.toString() : "",
        key: "category",
        value: filter.toLowerCase(),
        keysToRemove: ["page"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className="text-gray-300 body-text flex-between xs:flex-evenly sm:flex-center flex-wrap w-full sm:gap-4 mt-4 sm:mt-6 sm:pb-4 sm:max-w-2xl">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`${filter == category && "gradient_blue"} ${
            filter !== category && "hover:bg-slate-800"
          } flex items-center gap-2 whitespace-nowrap rounded-lg px-1 xs:px-3 sm:px-5 md:px-4  py-2 xs:py-2.5 capitalize text-sm sm:text-base transition-all`}
        >
          <div className="hidden md:block">
            <Image
              src={`/${filter}.png`}
              alt={`${filter}`}
              width={18}
              height={18}
            />
          </div>
          {filter}
        </button>
      ))}
    </ul>
  );
};
export default Filters;
