import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

const Page = () => {
  return <DynamicMap />;
};

export default Page;
