"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

import { Input } from "./ui/input";
import { formUrlQuery } from "@/sanity/utils";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";

      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <form className="flex-center w-full mx-auto mt-4 sm:mt-10">
      <label className="flex-center relative w-full max-w-2xl ">
        <Image
          src="/search-icon.svg"
          className="absolute left-4 sm:left-8"
          width={28}
          height={28}
          alt="Search icon"
        />
        <Input
          className="sm:base-regular h-14 sm:h-16 border-0 rounded-lg bg-black-400 py-4 sm:py-6 pl-16 sm:pl-20 pr-8 text-lg text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-600"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};
export default SearchForm;
