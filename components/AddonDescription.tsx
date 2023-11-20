import { PortableText } from "@portabletext/react";

const AddonDescription = ({ data }: { data: any }) => {
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
    <section className="flex flex-col w-full gap-4">
      <div className="flex w-full justify-between items-center px-3 py-3 rounded-lg border border-slate-600 text-slate-200 text-lg font-base">
        Details
      </div>

      <div className="px-3 sm:px-4 md:px-1 text-slate-400">
        <PortableText value={data} components={components} />
      </div>
    </section>
  );
};
export default AddonDescription;
