import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { format } from "date-fns";
import { getAddonDetails } from "@/sanity/actions";
import { MdShoppingCartCheckout } from "react-icons/md";
import AddonDescription from "@/components/AddonDescription";

const DynamicAddonMap = dynamic(() => import("@/components/AddonMap"), {
  ssr: false,
});

const AddonDetails = async ({ params }: { params: { slug: string } }) => {
  const addon = await getAddonDetails(params.slug);
  const formattedDate = format(new Date(addon.date), "MMMM d, yyyy");

  return (
    <main className="flex-center mx-auto w-full max-w-screen-2xl flex-col pt-[86px] sm:pt-36 px-4 sm:px-8">
      {/* Cover & info */}
      <section className="flex flex-col w-full md:flex-row gap-4 lg:gap-6 ">
        <div className="md:max-w-[50%]">
          <Image
            src={addon.image}
            alt="cover"
            width={720}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col md:w-1/2 md:justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-2xl md:text-xl lg:text-3xl font-medium text-white">
              <span className="font-bold">{addon?.icao} </span>
              {addon.title}
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-slate-200">
              {addon.developer}
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:gap-4 lg:gap-6">
            <div className="flex flex-between text-base font-light text-slate-200">
              <h2>{formattedDate}</h2>
              <h2>v{addon.version}</h2>
            </div>
            <Link
              href={addon.downloadLink}
              className="flex-center gap-2 font-medium text-white py-3 gradient_blue rounded-lg"
            >
              Buy now <MdShoppingCartCheckout className="w-[18px] h-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      <div className="w-1/2 border-t my-12 border-slate-400 opacity-30"></div>

      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="md:w-full min-w-[50%]">
          {/* Details & Changelog */}
          {addon.description && (
            <AddonDescription
              label={"Details"}
              data={addon.description}
              def={true}
            />
          )}
          {addon.changelog && (
            <AddonDescription
              label={"Changelog"}
              data={addon.changelog}
              def={false}
            />
          )}
        </div>
        {/* Addon map */}
        {addon.coordinates && (
          <section className="w-full">
            <DynamicAddonMap
              title={addon.title}
              icao={addon.icao}
              category={addon.category}
              lat={addon.coordinates.lat}
              lng={addon.coordinates.lng}
            />
          </section>
        )}
      </div>
    </main>
  );
};

export default AddonDetails;
