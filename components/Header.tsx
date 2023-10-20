interface Props {
  query?: string;
  category?: string;
}

const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className="heading3 w-full py-4 self-start text-white-800">
        Search results for "{query}" in{" "}
        <span className="capitalize">{category}</span>
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
        <span className="capitalize">Recently </span>released
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
  return (
    <h1 className="heading3 w-full py-4 self-start text-white-800">
      Recently released
    </h1>
  );
};
export default Header;
