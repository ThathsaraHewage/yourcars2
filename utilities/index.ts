import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // TODO : ADD TO ENV
  const headers = {
    "X-RapidAPI-Key":
      process.env.NEXT_API_RAPID_CAR_API_KEY ||
      "2ed903a564mshfc427c34875b303p18ffbajsnedcce03acd28",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  // TODO : ADD TO API
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

/**
 * generate car images using imagein studio
 * @param car - CarProps
 * @param angle - string : optional
 * */
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // TODO : ADD TO API
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  // TODO : ADD TO ENV
  url.searchParams.append(
    "customer",
    process.env.NEXT_API_CAR_IMAGE_API_KEY || "hrjavascript-mastery"
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  console.log(url);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  // current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // set specified search params to the existing value
  searchParams.set(type, value);

  const newURLpath = `${window.location.pathname}?${searchParams.toString()}`;

  return newURLpath;
};
