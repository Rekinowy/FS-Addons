"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "6";

  return (
    <div className="flex-center p-10 gap-4 text-white">
      <button
        className={`px-4 py-2 ring-1 ${
          !hasPrevPage && "ring-gray-700 text-gray-600"
        } rounded-lg`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`, {
            scroll: false,
          });
        }}
      >
        Prev
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className={`px-4 py-2 ring-1 ${
          !hasNextPage && "ring-gray-700 text-gray-600"
        } rounded-lg`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        Next
      </button>
    </div>
  );
};
export default PaginationControls;
