# Julien's project guidelines

The project has been build using the following technologies

- React
- Typescript
- Javascript
- Tailwind
- Alogolia InstantSearch and Widgets
- MUI components

Make sure to install all dependencies before jumping in the project using `yarn install`

The project structure is divided as follow
/client folder to handle all the frontend topics
/server folder to run the script and handle API calls

The project is organized to respect the separation of concerns principle and to follow react code structure best practices.

For review purpose, the server `.env`file has been pushed to github and the frontend values have been hardcoded (to remove for real life scenario)

To not spend to much time on it, this project is a MVP to answer the assignement instructions. Some improvement or real-life scenario are listed at the end of this ReadMe.

# Part 1

To retrieve PokeAPI data and update Aloglia index with the correct datas, we have built a script.
This script is located in /server/updateIndex.js
To run this script, navigate to /server folder and run `node updateIndex.js` in your terminal. This should make an API call to PokeAPI to retrieve data and update Algolia Index if necessary.

Disclaimer : the original dataset already provided an `image` field with and URL. It has been kept and and `imageUrl`field has been added to answer the assignement instructions.

# Part 2

All the frontend part is located inside the /client folder.
Make sure to navigate to /client folder and install dependencies.
You can run the frontend with `npm run dev`.

We have implemented Algolia instantSearch, RefinementList, SearchBox, RangeSlider widgets located in the /widget folder.
All small components are located in the /component folder

# Improvements

Some improvements could be added to this project for a real life scenario

- Handle input errors
- Refine frontend for better UI
- Add more filters for better UX
- Refine algolia index options for deeper search

# Demo-engineers-assignement

# Pokémon Search Experience with Algolia

## 👉 Objective

Develop a responsive web application that enables users to search for Pokémon using Algolia. This involves integrating with the PokéAPI to enrich the Pokémon data and implementing dynamic search features with filters, including a language switcher to display Pokémon names in multiple languages.

## 📝 Requirements

- Proficiency in frontend web development (HTML, CSS/Tailwind, JavaScript).
- Basic knowledge of Algolia and its InstantSearch library.
- Use external APIs (PokéAPI).
- Creativity in UI/UX design.

## 🫣 Assignment Details

### Part 1: Dataset Preparation and Enrichment

1. **Initial Setup with Algolia**:

   - Sign up to Algolia and create a new application. [sign up page](https://dashboard.algolia.com/users/sign_up)

2. **Download the Provided Pokémon Dataset**:

   - Begin with the basic dataset provided. [Pokedex.json](pokedex/pokedex.json)
   - Upload the data to your Algolia Application, creating your first index.

3. **Enrich the Dataset Using [PokéAPI](https://pokeapi.co/)**:
   - The provided dataset is missing crucial information like `images` and `game_versions`. Enrich the your Algolia Index using the PokéAPI.
   - For each Pokémon, retrieve:
     - The image URL, storing it in an `imageUrl` field.
     - The list of game versions it appears in, transforming this into a `game_versions` array.
   - Use Algolia’s `browseObjects` method to fetch existing records, enrich them with PokéAPI information, and update your dataset using `partialUpdateObjects` to include `game_versions` and `imageUrl`.
   - You can use the Algolia API Docs to conduct your data transformation. [Documentation API](https://www.algolia.com/doc/)

#### Expected Format of a Final Record in your newly Algolia Dashboard

```json
{
  "id": 15,
  "name": {
    "english": "Beedrill",
    "japanese": "スピアー",
    "chinese": "大针蜂",
    "french": "Dardargnan"
  },
  "type": ["Bug", "Poison"],
  "base": {
    "HP": 65,
    "Attack": 90,
    "Defense": 40,
    "Sp. Attack": 45,
    "Sp. Defense": 80,
    "Speed": 75
  },
  "game_versions": ["Red", "Blue", "Yellow", "Gold", "Silver", "Crystal"],
  "imageUrl": "https://example.com/beedrill-image.png"
}
```

### Part 2: Building the Search Experience

1. **Project Setup**: Choose your preferred web development framework and set up the project. Use Tailwind or standard CSS/SASS for styling. You can also use the react-boilerplate that is provided in this repository. This boilerplate include:

- Typescript
- Tailwind
- Instant Search

2. **Algolia Integration**:

- Implement Algolia search in your application using the InstantSearch library. [Instant Search Documentation](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/)

3. **Search Interface**:

- **Search Bar**: Create a search bar to initiate searches.
- **Search Results**: Display dynamic search results, showing each Pokémon's image, name, type, and stats.
- **Filters**:
  - Implement filters using instant search custom widget for Pokémon type, game versions, and at least one stat (using a range slider).
  - Ensure the UI for these filters is intuitive and user-friendly.
- **Language Switcher**: Implement a dropdown to switch the display language of Pokémon names. Support English, Japanese, Chinese, and French.
- **Persistent Preferences**: Use local storage or any state manager with persistent services to save the user’s language preference across page reloads.

Attached is a wireframe outlining the proposed design for your user interface. That said, feel free to exercise as much creativity as you wish.

![Wireframe - DE - Assignement 2024](https://github.com/algolia/Demo-engineers-assignement/assets/47173348/009a0aaf-a9d2-4c30-9651-a118bf123897)

### Evaluation Criteria

- **Functionality**: All features including: search, filters, and the bonus features work correctly.
- **Code Quality**: The code should be clean, well-documented and follow best practices. Important: The exercise should follow a coherent and logical folder structure.
- **User Experience**: The application is intuitive, responsive, and visually appealing across devices.
- **Algolia Integration**: Demonstrates an effective use of Algolia's search capabilities.
- **Creativity and Problem-Solving**: Showcases innovative solutions and thoughtful UI/UX design.

## 🎉 Submission Instructions

- Submit your project as a GitHub repository link. Ensure it is public or shared with the relevant parties.
- Include a README file with setup instructions, a brief overview of technologies used, and special instructions for accessing the features you've implemented, especially the bonus challenges.

This assignment is designed to assess your technical skills, creativity, and problem-solving abilities in a practical scenario. We look forward to seeing how you leverage Algolia and the PokéAPI to create an engaging Pokémon search experience.

Happy Coding 🪄
