"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  count: number;
  page: string;
  perPage?: string;
  pagesCount: number;
}

const PaginationControls = ({ page, pagesCount }: PaginationControlsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const lastPage = Number(page) === pagesCount;

  const handleChangePage = (page: string) => {
    let newUrl = "";

    newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: page,
    });

    router.push(newUrl, { scroll: false });
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
  };

  return (
    <div className="flex-center pt-6 sm:pt-8 gap-6 text-white">
      <button
        className={`px-4 py-2 ring-1 ${
          page === "1" && "ring-gray-700 text-gray-600"
        } rounded-lg`}
        disabled={page === "1"}
        onClick={() => handleChangePage((Number(page) - 1).toString())}
      >
        Prev
      </button>

      <div>
        {page} / {pagesCount}
      </div>

      <button
        className={`px-4 py-2 ring-1 ${
          lastPage && "ring-gray-700 text-gray-600"
        } rounded-lg`}
        disabled={lastPage}
        onClick={() => handleChangePage((Number(page) + 1).toString())}
      >
        Next
      </button>
    </div>
  );
};
export default PaginationControls;
