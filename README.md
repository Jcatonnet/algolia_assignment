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
   - Sign up to Algolia and create a new application. (Put the Dashboard URL here)

2. **Download the Provided Pokémon Dataset**:
   - Begin with the basic dataset provided. (link the dataset here)
   - Upload the data to your Algolia Application, creating your first index.

4. **Enrich the Dataset Using [PokéAPI](https://pokeapi.co/)**:
   - The provided dataset is missing crucial information like `images` and `game_versions`. Enrich the your Algolia Index using the PokéAPI.
   - For each Pokémon, retrieve:
     - The image URL, storing it in an `imageUrl` field.
     - The list of game versions it appears in, transforming this into a `game_versions` array.
   - Use Algolia’s `browseObjects` method to fetch existing records, enrich them with PokéAPI information, and update your dataset using `partialUpdateObjects` to include `game_versions` and `imageUrl`.
   - You can use the Algolia API Docs to conduct your data transformation (provide url to api ref docs here).

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
1. **Project Setup**: Choose your preferred web development framework and set up the project. Use Tailwind or standard CSS/SASS for styling.

2. **Algolia Integration**:
  - Implement Algolia search in your application using the InstantSearch library. (Link to InstantSearch Docs here)

3. **Search Interface**:
  - **Search Bar**: Create a search bar to initiate searches.
  - **Search Results**: Display dynamic search results, showing each Pokémon's image, name, type, and stats.
  - **Filters**:
    - Implement filters using instant search custom widget for Pokémon type, game versions, and at least one stat (using a range slider). (link to custom widgets here)
    - Ensure the UI for these filters is intuitive and user-friendly.

#### Bonus Challenges
- **Language Switcher**: Implement a dropdown to switch the display language of Pokémon names. Support English, Japanese, Chinese, and French.
- **Team Formation**: Allow users to select up to six Pokémon to form a team, displaying the team on the page or as a modal with the ability to edit the team's pokemons.
- **Persistent Preferences**: Ensure that your user's language and team preferences are saved and persist a page reload.

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
