import { SearchBox } from "react-instantsearch";
import Pokeball from "../assets/pokeball.png";
import LanguageSwitcher from "./LanguageSwitcher";
import CustomSearchBox from "../widgets/CustomSearchBox";

export const Header = () => {
  return (
    <header className="bg-primary h-64 pl-12 pr-12 flex items-center">
      <div className="flex-grow-0 flex-shrink-0 w-2/5 pl-24">
        <img className="w-32 h-32" alt="Pokeball" src={Pokeball} />
      </div>
      <div className="flex-grow-0 relative flex-shrink-0 w-2/5">
        <CustomSearchBox />
      </div>
      <div className="flex-grow-0 relative flex-shrink-0 ml-4">
        <LanguageSwitcher />
      </div>
    </header>
  );
};
