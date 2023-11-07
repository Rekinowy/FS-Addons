import { getMapData } from "@/sanity/actions";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

const Page = async () => {
  const mapData = await getMapData();

  return <DynamicMap data={mapData} />;
};

export default Page;
