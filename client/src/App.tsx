import algoliasearch from "algoliasearch/lite";
import {
  Configure,
  InstantSearch,
  Menu,
  Pagination,
  RefinementList,
} from "react-instantsearch";
import { Header } from "./components/Header";
import { HitsInGrid } from "./components/HitsList";
import { capitalizeFirstLetter } from "./utils";

const searchClient = algoliasearch(
  "7WCTUL69D6",
  "faf7c7ff869cfc28986411d8ca0699cc"
);

const App = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="julien_pokemons">
        <Header />
        <Configure hitsPerPage={40} />
        <Pagination
          padding={2}
          classNames={{
            list: "list-none p-0 flex justify-center text-center mt-10 mb-4",
            item: "inline-block mx-1.5 leading-none w-7 h-7 border border-primary flex rounded-md justify-center items-center",
            selectedItem: "bg-primary text-white-100",
          }}
        />
        <div className="flex justify-center">
          <div className="w-1/5">
            <RefinementList
              attribute="type"
              operator="and"
              showMore
              searchable
              searchablePlaceholder="Filter by types"
              classNames={{
                root: "bg-white rounded-lg shadow p-4 my-4",
                searchBox: "w-full mb-4",
                list: "list-none m-0 p-0",
                item: "mb-2 p-2 hover:bg-gray-100 rounded cursor-pointer",
                selectedItem:
                  "font-semibold bg-secondary text-white-100 rounded p-2",
                label: "flex items-center space-x-2",
                checkbox:
                  "form-checkbox text-secondary rounded checkbox-checked",
                labelText: "text-gray-700",
                count: "text-sm text-gray-600 bg-gray-100 p-1 rounded",
                showMore: "text-secondary hover:underline",
                disabledShowMore: "text-gray-400",
              }}
            />
            <Menu
              attribute="game_versions"
              limit={6}
              showMore={true}
              showMoreLimit={25}
              sortBy={["name:asc"]}
              transformItems={(items) =>
                items.map((item) => ({
                  ...item,
                  label: capitalizeFirstLetter(item.label),
                }))
              }
              classNames={{
                root: "bg-white rounded-lg shadow p-4 my-4",
                list: "list-none m-0 p-0",
                item: "mb-2 p-2 hover:bg-gray-100 rounded cursor-pointer",
                selectedItem:
                  "font-semibold bg-secondary text-white rounded p-2",
                link: "flex justify-between items-center space-x-2",
                label: "text-gray-700",
                count: "text-sm text-gray-600 bg-gray-100 p-1 rounded",
                showMore: "text-secondary hover:underline",
                disabledShowMore: "text-gray-400",
              }}
            />
          </div>
          <HitsInGrid />
        </div>
      </InstantSearch>
    </>
  );
};

export default App;
