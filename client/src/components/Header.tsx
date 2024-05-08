import { SearchBox } from "react-instantsearch";
import Pokeball from "../assets/pokeball.png";

export const Header = () => {
  return (
    <header className="bg-primary h-64 pl-12 pr-12 flex items-center">
      <div className="flex-grow-0 flex-shrink-0 w-2/5 pl-24">
        <img className="w-32 h-32" alt="Pokeball" src={Pokeball} />
      </div>
      <div className="flex-grow-0 relative flex-shrink-0 w-2/5">
        <SearchBox
          placeholder="Search in your pokedex"
          classNames={{
            root: "ais-SearchBox",
            form: "ais-SearchBox-form relative flex items-center bg-white rounded-full border border-white-100 shadow px-4 py-2 focus-within:border-blue-500",
            input:
              "ais-SearchBox-input flex-1 outline-none text-sm text-gray-600 pl-10 placeholder-primary",
            submit: "ais-SearchBox-submit absolute inset-y-0 left-4 ",
            reset: "hidden",
          }}
        />
      </div>
    </header>
  );
};
