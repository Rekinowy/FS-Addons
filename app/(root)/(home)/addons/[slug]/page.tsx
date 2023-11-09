import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { format } from "date-fns";
import { getAddonDetails } from "@/sanity/actions";
import { MdShoppingCartCheckout } from "react-icons/md";
import AddonInfoBlock from "@/components/AddonInfoBlock";
import AddonDescription from "@/components/AddonDescription";
import { countryName } from "@/constants/countries";

const DynamicAddonMap = dynamic(() => import("@/components/AddonMap"), {
  ssr: false,
});

const AddonDetails = async ({ params }: { params: { slug: string } }) => {
  const addon = await getAddonDetails(params.slug);
  const formattedDate = format(new Date(addon.date), "MMMM d, yyyy");

  return (
    <main className="flex-center mx-auto w-full max-w-screen-2xl flex-col pt-[86px] sm:pt-36 px-4 sm:px-6">
      {/* Cover image*/}
      <section className="grid md:grid-cols-2 gap-4 lg:gap-8 ">
        <div className="w-full">
          <Image
            src={addon.image}
            alt="cover"
            width={720}
            height={450}
            className="rounded-lg"
          />
        </div>

        {/* Addon info */}
        <div className="flex flex-col w-full md:justify-between gap-12 md:gap-0">
          <div className="flex flex-col gap-2 lg:gap-5">
            <h1 className="text-2xl md:text-xl lg:text-3xl font-medium text-white">
              <span className="font-bold">{addon?.icao} </span>
              {addon.title}
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-slate-200">
              {addon.developer}
            </h2>
            <div className="flex gap-4 text-base my-2 font-light text-slate-200">
              <div className="flex w-fit gap-1.5 rounded-md text-sm px-2 py-1.5 text-slate-200 ring-1">
                <h4 className="font-medium capitalize">{addon.category}</h4>
              </div>
              {addon.country && (
                <div className="flex w-fit gap-1.5 rounded-md text-sm px-2 py-1.5 text-slate-200 ring-1">
                  <Image
                    src={`/flags/${addon.country.toLowerCase()}.png`}
                    alt={`${addon.country}`}
                    width={20}
                    height={20}
                  />
                  <h4 className="font-medium">{countryName[addon.country]}</h4>
                </div>
              )}
            </div>
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

      {/* Separator */}
      <div className="w-1/2 border-t my-10 md:my-12 border-slate-400 opacity-30"></div>

      <div className="grid md:grid-cols-2 w-full gap-8 ">
        {/* Details & Changelog */}

        {addon.description && <AddonDescription data={addon.description} />}
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
        {addon.changelog && (
          <AddonInfoBlock
            label={"Changelog"}
            data={addon.changelog}
            def={false}
          />
        )}
      </div>
    </main>
  );
};

export default AddonDetails;
