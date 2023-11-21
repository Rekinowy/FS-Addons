"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/sendEmail";

const Page = () => {
  const [isSending, setIsSending] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const formData = new FormData();
  formData.append("senderEmail", senderEmail);
  formData.append("message", message);

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
        onSubmit={async (event) => {
          event.preventDefault();
          setIsSending(true);
          await sendEmail(formData);
          setIsSending(false);
          setIsMessageSent(true);
          setSenderEmail("");
          setMessage("");
          setTimeout(() => setIsMessageSent(false), 5000);
        }}
      >
        <Input
          className="text-lg h-12 sm:h-16 border-0 rounded-lg bg-black-400 p-4 sm:p-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-grey-100 placeholder:text-xl max-sm:placeholder:text-base"
          name="senderEmail"
          type="email"
          value={senderEmail}
          onChange={(event) => setSenderEmail(event.target.value)}
          required
          maxLength={100}
          placeholder="Your email"
          disabled={isSending}
        />
        <Textarea
          className="text-lg h-52 sm:h-64 border-0 rounded-lg bg-black-400 px-4 sm:px-8 py-5 text-white-800 !ring-0 !ring-offset-0 placeholder:text-grey-100 placeholder:text-xl max-sm:placeholder:text-base"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Your message"
          required
          disabled={isSending}
        />
        <button
          className="flex-center self-center rounded-lg w-24 px-1 xs:px-3 sm:px-5 md:px-4 py-2 xs:py-2.5 capitalize text-sm sm:text-base text-gray-300 bg-slate-800 hover:bg-slate-600 disabled:hover:bg-slate-800 disabled:text-gray-500  transition-all"
          disabled={isSending}
        >
          Submit
        </button>
        {isSending && <p className="text-center text-white-400">Sending...</p>}
        {isMessageSent && (
          <p className="text-center text-green-500">
            The message has been sent!
          </p>
        )}
      </form>
    </main>
  );
};
export default Page;
