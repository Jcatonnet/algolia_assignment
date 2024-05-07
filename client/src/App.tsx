import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
import { Header } from "./components/Header";

const searchClient = algoliasearch(
  "7WCTUL69D6",
  "faf7c7ff869cfc28986411d8ca0699cc"
);

const App = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="julien_pokemons">
        <Header />
      </InstantSearch>
    </>
  );
};

export default App;
