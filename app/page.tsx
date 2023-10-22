import { Custom_Filter, Head, Search_Bar, CarCard } from "@/components";
import Show_more from "@/components/Show_more";
import { fuels, yearsOfProduction } from "@/constants/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utilities";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Head />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars for Sale</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <Search_Bar />
          <div className="home__filter-container">
            <Custom_Filter title="fuel" options={fuels} />
            <Custom_Filter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <Show_more
              pageNo={(searchParams.limit || 10) / 10}
              isShowMore={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No cars !</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
