import algoliasearch from "algoliasearch";
import { fetchPokemonData } from "./pokeApi.js";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

const enrichAndUpdateRecords = async () => {
  try {
    index.browseObjects({
      query: "",
      batch: async (hits) => {
        const updates = await Promise.all(
          hits.map(async (hit) => {
            const { imageUrl, gameVersions } = await fetchPokemonData(hit.id);
            return {
              objectID: hit.objectID,
              imageUrl,
              game_versions: gameVersions,
            };
          })
        );
        const { objectIDs } = await index.partialUpdateObjects(updates, {
          createIfNotExists: true,
        });
        console.log("Updated records:", objectIDs);
      },
    });
  } catch (error) {
    console.error("Error updating Algolia index:", error);
  }
};

enrichAndUpdateRecords();
