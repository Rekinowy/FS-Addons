"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import Image from "next/image";
import Link from "next/link";
import { MdShoppingCartCheckout } from "react-icons/md";

type Addon = {
  title: string;
  slug: { current: string; _type: string };
  icao?: string;
  image: string;
  developer: string;
  version: string;
  country?: string;
  date: string;
  downloadLink: string;
};

const AddonCard = ({
  title,
  slug,
  icao,
  image,
  developer,
  version,
  country,
  date,
  downloadLink,
}: Addon) => {
  const formattedDate = format(new Date(date), "MMMM d, yyyy");

  const router = useRouter();
  const searchParams = useSearchParams();
  const qCountry = searchParams?.get("country");

  const handleCountryFilter = (event: React.MouseEvent, country: string) => {
    event.preventDefault();
    let newUrl = "";

    if (qCountry === country) {
      newUrl = formUrlQuery({
        params: searchParams ? searchParams.toString() : "",
        keysToRemove: ["country", "page"],
        value: null,
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams ? searchParams.toString() : "",
        key: "country",
        value: country.toUpperCase(),
        keysToRemove: ["page"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex flex-col justify-between w-full rounded-lg ring-2 ring-black-300 cursor-pointer hover:ring-black-400 transition-all">
      <Link
        href={"/addons/" + slug.current}
        className="relative text-white text-sm font-semibold"
      >
        <div className="absolute rounded-md px-2 py-1 top-2 right-2 gradient_blue">
          <h4 className="font-semibold">v{version}</h4>
        </div>
        {country && (
          <button
            onClick={(event) => handleCountryFilter(event, country)}
            className="absolute flex gap-1 rounded-md px-1.5 py-1 top-2 left-2 gradient_blue hover:ring-1"
          >
            <Image
              src={`/flags/${country.toLowerCase()}.png`}
              alt={`${country}`}
              width={20}
              height={20}
            />
            <h4 className="uppercase">{country}</h4>
          </button>
        )}
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full rounded-t-lg object-contain"
        />
        <div>
          <div className="flex flex-col py-3 px-3 gap-2">
            <h2 className="font-medium text-xl font text-white">
              <span className="font-bold">{icao}</span> {title}
            </h2>
            <h3 className="text-base font-light text-slate-200">{developer}</h3>
          </div>
        </div>
      </Link>
      <div className="flex-between py-2 px-3 text-sm lg:text-base">
        <p className=" text-slate-400 font-light">{formattedDate}</p>
        <Link href={downloadLink} className="flex-center p-2 group">
          <p className="mr-2 group-hover:font-semibold transition-all duration-75 text-gradient_blue">
            Buy now
          </p>
          <MdShoppingCartCheckout className="w-[18px] h-[18px] text-[#4c73ff] group-hover:text-[#389bff] transition-all duration-75" />
        </Link>
      </div>
    </div>
  );
};
export default AddonCard;
