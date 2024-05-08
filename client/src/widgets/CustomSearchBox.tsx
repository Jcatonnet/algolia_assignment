import { SearchBox } from "react-instantsearch";

const CustomSearchBox = () => {
  return (
    <SearchBox
      placeholder="Search in your pokedex"
      classNames={{
        root: "ais-SearchBox",
        form: "ais-SearchBox-form relative flex items-center bg-white rounded-full border border-white-100 shadow px-4 py-4 focus-within:border-secondary",
        input:
          "ais-SearchBox-input flex-1 outline-none text-sm text-gray-600 pl-10 placeholder-primary",
        submit: "ais-SearchBox-submit absolute inset-y-0 left-4 ",
        reset: "hidden",
      }}
    />
  );
};

export default CustomSearchBox;
