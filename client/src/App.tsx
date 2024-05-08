import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch, Pagination } from "react-instantsearch";
import { Header } from "./components/Header";
import { HitsInGrid } from "./components/HitsList";
import { RangeSlider } from "./widgets/RangeSlider";
import CustomRefinementList from "./widgets/CustomRefinementList";
import CustomMenu from "./widgets/CustomMenu";
import { LanguageProvider } from "./components/LanguageContext";
import { NoResults, NoResultsBoundary } from "./components/NoResult";

const searchClient = algoliasearch(
  "7WCTUL69D6",
  "faf7c7ff869cfc28986411d8ca0699cc"
);

const App = () => {
  return (
    <LanguageProvider>
      <InstantSearch searchClient={searchClient} indexName="julien_pokemons">
        <Header />

        <Configure hitsPerPage={20} />

        <div className="flex justify-center">
          <div className="w-1/5 flex-shrink-0 ml-14">
            <CustomRefinementList attribute="type" />
            <CustomMenu attribute="game_versions" />
            <RangeSlider attribute="base.HP" />
          </div>
          <div className="flex flex-col items-center ml-10 flex-grow ">
            <Pagination
              padding={2}
              classNames={{
                list: "list-none p-0 flex justify-center text-center mt-10 mb-4",
                item: "inline-block mx-1.5 leading-none w-7 h-7 border border-primary flex rounded-md justify-center items-center",
                selectedItem: "bg-primary text-white-100",
              }}
            />
            <NoResultsBoundary fallback={<NoResults />}>
              <HitsInGrid />
            </NoResultsBoundary>
          </div>
        </div>
      </InstantSearch>
    </LanguageProvider>
  );
};

export default App;
