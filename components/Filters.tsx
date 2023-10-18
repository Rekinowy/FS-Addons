"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const filters = ["all", "aircrafts", "airports", "misc", "utilities"];

const Filters = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <ul className="text-gray-300 body-text no-scrollbar flex-between xs:flex-center flex-wrap w-full xs:gap-4 py-4 sm:py-6 sm:max-w-2xl">
      {filters.map((filter) => (
        <Link
          href={`?category=${filter}`}
          key={filter}
          className={`${
            filter == category && "gradient_blue"
          } whitespace-nowrap rounded-lg px-3 sm:px-6 py-2.5 capitalize text-sm sm:text-base`}
        >
          {filter}
        </Link>
      ))}
    </ul>
  );
};
export default Filters;
