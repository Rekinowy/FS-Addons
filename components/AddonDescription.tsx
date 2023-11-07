"use client";

import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

const AddonDescription = ({ description }: any) => {
  const [descIsOpen, setDescIsOpen] = useState(false);

  const components = {
    block: {
      normal: ({ children }: any) => <p className="pb-4">{children}</p>,
      h1: ({ children }: any) => <h1 className="pb-4 pt-4">{children}</h1>,
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="ml-6 pb-2" style={{ listStyleType: "disc" }}>
          {children}
        </li>
      ),
    },
  };

  return (
    <section className="w-full">
      <button
        onClick={() => setDescIsOpen((prev) => !prev)}
        className="flex w-full justify-between items-center p-2 mb-4 rounded-lg border border-slate-600 text-slate-200"
      >
        <h1 className="text-lg font-base">Details</h1>
        <MdPlayArrow
          className={`w-[24px] h-[24px] ${
            descIsOpen ? "-rotate-90" : "rotate-90"
          } transition-all duration-300 `}
        />
      </button>
      {descIsOpen && (
        <div>
          <div className="px-2 sm:px-4 text-slate-400">
            <PortableText value={description} components={components} />
          </div>
        </div>
      )}
    </section>
  );
};
export default AddonDescription;
