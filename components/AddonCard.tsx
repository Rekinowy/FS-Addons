import { format } from "date-fns";

import Image from "next/image";
import Link from "next/link";

type Addon = {
  title: string;
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
  icao,
  image,
  developer,
  version,
  country,
  date,
  downloadLink,
}: Addon) => {
  const formattedDate = format(new Date(date), "MMMM d, yyyy");

  return (
    <div className="flex flex-col justify-between w-full rounded-lg ring-2 ring-black-300 cursor-pointer hover:ring-black-400">
      <div className="relative text-white text-sm font-semibold">
        <div className="absolute rounded-md px-2 py-1 top-2 right-2 gradient_blue">
          <h4 className="font-semibold">v{version}</h4>
        </div>
        {country && (
          <div className="absolute flex gap-1 rounded-md px-2 py-1 top-2 left-2 gradient_blue">
            <Image
              src={`/flags/${country}.png`}
              alt="PL"
              width={20}
              height={20}
            />
            <h4 className="uppercase">{country}</h4>
          </div>
        )}
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full rounded-t-lg object-contain"
        />
        <div>
          <div className="flex flex-col py-2 px-3 gap-2">
            <h2 className="font-base text-xl text-white">
              <span>{icao}</span> {title}
            </h2>
            <h3 className="text-base font-light text-slate-200">{developer}</h3>
          </div>
        </div>
      </div>

      <div className="flex-between py-2 px-3 text-sm lg:text-base">
        <p className=" text-slate-400 font-light">{formattedDate}</p>
        <Link href={downloadLink} className="flex p-2">
          <p className="mr-1.5 text-gradient_blue text font">Download</p>
          <Image
            src="/arrow-blue.svg"
            alt="Download"
            width={14}
            height={14}
            className=" rotate-90"
          />
        </Link>
      </div>
    </div>
  );
};
export default AddonCard;