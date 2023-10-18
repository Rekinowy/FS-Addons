import AddonCard from "@/components/AddonCard";
import Filters from "@/components/Filters";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const addons = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  return (
    <main className="flex-center mx-auto w-full max-w-screen-2xl flex-col pt-20 sm:px-8 px-6">
      <section className="flex-center flex-col w-full">
        <SearchForm />
        <Filters />
      </section>
      <section className="max-sm:py-2">
        <h1 className="heading3 self-start pb-4 sm:pt-4 text-white-800">
          Recently released
        </h1>
        <div className="lg:gap-8 gap-4  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {addons.map((addon: any) => (
            <AddonCard
              key={addon._id}
              title={addon.title}
              icao={addon.icao}
              image={addon.image}
              developer={addon.developer}
              version={addon.version}
              country={addon.country}
              date={addon.date}
              downloadLink={addon.downloadLink}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
