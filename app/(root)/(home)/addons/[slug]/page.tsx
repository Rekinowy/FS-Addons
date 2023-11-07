import Image from "next/image";
import { format } from "date-fns";
import { getAddonDetails } from "@/sanity/actions";
import Link from "next/link";
import { MdShoppingCartCheckout } from "react-icons/md";
import AddonDescription from "@/components/AddonDescription";

const AddonDetails = async ({ params }: { params: { slug: string } }) => {
  const addon = await getAddonDetails(params.slug);
  const formattedDate = format(new Date(addon.date), "MMMM d, yyyy");

  return (
    <main className="flex-center mx-auto gap-12 w-full max-w-screen-2xl flex-col pt-[86px] sm:pt-36 px-4 sm:px-8">
      <section className="flex flex-col gap-4">
        <div className="rounded-lg">
          <Image
            src={addon.image}
            alt="cover"
            width={640}
            height={360}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium text-white">
              <span className="font-bold">{addon?.icao} </span>
              {addon.title}
            </h1>
            <h2 className="text-xl font-light text-slate-200">
              {addon.developer}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
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
      {addon.description && (
        <AddonDescription description={addon.description} />
      )}
    </main>
  );
};

export default AddonDetails;
