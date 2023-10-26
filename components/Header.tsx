import { countryName } from "@/constants/countries";

interface Props {
  query?: string;
  category?: string;
  country?: string;
}

const Header = ({ query, category, country }: Props) => {
  if (query && category && country) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        Search results for "{query}" in{" "}
        <span className="capitalize">{category}</span>{" "}
        <span className="capitalize">from {countryName[country]}</span>
      </h1>
    );
  }
  if (query && category) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        Search results for "{query}" in{" "}
        <span className="capitalize">{category}</span>
      </h1>
    );
  }
  if (query && country) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        Search results for "{query}" from{" "}
        <span className="capitalize">{countryName[country]}</span>
      </h1>
    );
  }
  if (category == "all" && country) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        From {countryName[country]}
      </h1>
    );
  }
  if (category && country) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        <span className="capitalize">{category}</span> from{" "}
        {countryName[country]}
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        Search results for "{query}"
      </h1>
    );
  }
  if (category === "all") {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        Recently released
      </h1>
    );
  }
  if (category) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        <span className="capitalize">{category}</span>
      </h1>
    );
  }
  if (country) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        <span className="capitalize">From {countryName[country]}</span>
      </h1>
    );
  }
  return (
    <h1 className="heading3 w-full py-4 self-start text-white-800">
      Recently released
    </h1>
  );
};
export default Header;
