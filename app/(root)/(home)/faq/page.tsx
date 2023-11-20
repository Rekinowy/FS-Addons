"use client";

import { faq } from "@/constants";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

const Page = () => {
  const [openAnswers, setOpenAnswers] = useState<Record<number, boolean>>({});

  const toggleAnswer = (index: number) => {
    setOpenAnswers((prevOpenAnswers) => ({
      ...prevOpenAnswers,
      [index]: !prevOpenAnswers[index],
    }));
  };
  return (
    <main className="flex mx-auto w-full gap-10 max-w-screen-xl flex-col pt-24 sm:pt-32 px-4 sm:px-8">
      <h1 className="text-slate-200 font-semibold text-2xl sm:text-3xl">
        Frequently Asked Questions (FAQ)
      </h1>
      <section className="flex flex-col ">
        {faq.map((item, index) => (
          <div className="flex flex-col w-full gap-4" key={index}>
            <button
              onClick={() => toggleAnswer(index)}
              className="flex w-full justify-between items-center gap-2 px-3 py-3 rounded-lg border border-slate-600 text-slate-300 sm:text-lg font-base"
            >
              <p className="px-2 text-left">{item.question}</p>
              <MdPlayArrow
                className={`w-[24px] h-[24px] ${
                  openAnswers[index] ? "-rotate-90" : "rotate-90"
                } transition-all duration-300 `}
              />
            </button>

            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                openAnswers[index] ? "max-h-full"" : "max-h-0"
              }  text-slate-400 sm:text-lg
              `}
            >
              <p className="w-full px-4 pb-8">{item.answer}</p>
            </div>
          </div>
        ))}
      </section>
      <p className="px-2 text-slate-400 sm:text-lg">
        These are just a few basic details about using the website. If you have
        additional questions, feel free to use the contact form. Thank you for
        using our website!
      </p>
    </main>
  );
};

export default Page;
