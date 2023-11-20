import Image from "next/image";

const CountryButton = ({
  country,
  handleCountryFilter,
}: {
  country: string;
  handleCountryFilter?: any;
}) => {
  return (
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
  );
};
export default CountryButton;
