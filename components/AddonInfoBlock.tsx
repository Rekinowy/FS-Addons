"use client";

import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

const AddonInfoBlock = ({
  data,
  label,
  def,
}: {
  data: any;
  label: string;
  def: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(def);

  const components = {
    block: {
      normal: ({ children }: any) => <p className="pb-4">{children}</p>,
      h4: ({ children }: any) => (
        <h4 className="font-semibold pb-2 pt-4">{children}</h4>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="ml-6 pb-1" style={{ listStyleType: "disc" }}>
          {children}
        </li>
      ),
    },
  };

  return (
    <section className="flex flex-col w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full justify-between items-center px-3 py-3 rounded-lg border border-slate-600 text-slate-200 text-lg"
      >
        {label}
        <MdPlayArrow
          className={`w-[24px] h-[24px] ${
            isOpen ? "-rotate-90" : "rotate-90"
          } transition-all duration-300 `}
        />
      </button>

      <div
        className={`px-3 sm:px-4 md:px-1 text-slate-400 overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-full" : "max-h-0"
        }  text-slate-400
        `}
      >
        <PortableText value={data} components={components} />
      </div>
    </section>
  );
};
export default AddonInfoBlock;
