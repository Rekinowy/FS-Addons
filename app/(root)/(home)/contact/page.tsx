"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/sendEmail";

const Page = () => {
  return (
    <main className="flex mx-auto w-full gap-6 sm:gap-8 max-w-screen-xl flex-col pt-24 sm:pt-32 px-4 sm:px-8">
      <h1 className="text-slate-200 font-semibold text-2xl sm:text-3xl">
        Contact
      </h1>
      <p className=" text-slate-400 sm:text-lg">
        Here you will find a form through which you can contact us. Feel free to
        ask questions, provide suggestions, and report any missing add-ons and
        updates.
      </p>
      <form
        id="contact"
        className="flex flex-col gap-6 w-full max-w-[720px] mx-auto"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <Input
          className="base-regular h-12 sm:h-16 border-0 rounded-lg bg-black-400 p-4 sm:p-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-grey-100 placeholder:text-xl max-sm:placeholder:text-base max-sm:text-lg"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
        />
        <Textarea
          className="base-regular h-52 sm:h-64 border-0 rounded-lg bg-black-400 p-4 sm:p-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-grey-100 placeholder:text-xl max-sm:placeholder:text-base max-sm:text-lg"
          name="message"
          placeholder="Your message"
          required
        />
        <button className="flex-center self-center rounded-lg w-24 px-1 xs:px-3 sm:px-5 md:px-4 py-2 xs:py-2.5 capitalize text-sm sm:text-base text-gray-300 bg-slate-800 hover:bg-slate-600 transition-all">
          Submit
        </button>
      </form>
    </main>
  );
};
export default Page;
