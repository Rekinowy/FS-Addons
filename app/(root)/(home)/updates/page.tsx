const Page = () => {
  return (
    <main className="flex mx-auto w-full gap-10 max-w-screen-xl flex-col pt-24 sm:pt-32 px-4 sm:px-8">
      <h1 className="text-slate-200 font-semibold text-2xl sm:text-3xl">
        Updates
      </h1>
      <p className=" text-slate-400 sm:text-lg">
        Here you will find news about upcoming add-ons and updates that will
        soon appear on the website.
      </p>
      <p className=" text-slate-400 sm:text-lg">
        If you notice that there is a lack of any fresh informations, let us
        know through the "Contact" tab.
      </p>
    </main>
  );
};

export default Page;
