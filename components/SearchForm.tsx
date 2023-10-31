"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

import { Input } from "./ui/input";
import { formUrlQuery } from "@/sanity/utils";
import { MdSearch } from "react-icons/md";

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
    <form id="search" className="flex-center w-full mx-auto sm:mt-0">
      <label id="search" className="flex-center relative w-full max-w-2xl ">
        <MdSearch className="absolute left-4 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 text-grey-100" />
        <Input
          className="base-regular h-12 sm:h-16 border-0 rounded-lg bg-black-400 pl-14 sm:pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-grey-100  placeholder:text-xl max-sm:placeholder:text-base max-sm:text-lg"
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
