import { Hits } from "react-instantsearch";
import { PokemonCard } from "./PokemanCard";

const Hit = ({ hit }: any) => {
  return (
    <PokemonCard
      imageUrl={hit.imageUrl}
      name={hit.name}
      type={hit.type}
      base={hit.base}
    />
  );
};

export const HitsInGrid = () => {
  return (
    <Hits
      hitComponent={Hit}
      classNames={{
        list: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-4 p-4",
      }}
    />
  );
};
