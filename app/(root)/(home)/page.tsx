import AddonCard from "@/components/AddonCard";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import PaginationControls from "@/components/PaginationControls";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";
  const page = searchParams?.page || "1";
  const perPage = "6";

  const addons = await getResources({
    query: query,
    category: category,
    page: page,
    perPage: perPage,
  });

  const pagesCount = Math.ceil(addons?.count / Number(perPage));

  return (
    <main className="flex-center mx-auto w-full max-w-screen-2xl flex-col pt-20 sm:pt-32 px-6 sm:px-8">
      <section className="flex-center flex-col w-full">
        <SearchForm />
        <Filters />
      </section>
      <section className="max-sm:pt-2 w-full">
        <Header query={query} category={category} />
        <div className="lg:gap-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-2">
          {addons?.resources.length > 0 ? (
            addons?.resources.map((addon: any) => (
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
            ))
          ) : (
            <p className="text-lg w-full m-4 text-white-400">No addons found</p>
          )}
        </div>
        {pagesCount > 1 && (
          <PaginationControls
            count={addons?.count}
            page={page}
            perPage={perPage}
            pagesCount={pagesCount}
          />
        )}
      </section>
    </main>
  );
};

export default Page;
