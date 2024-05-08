import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PokemonType } from "../types";
import { useLanguage } from "./LanguageContext";
import { getPokemonNameByLanguage } from "../utils";

export const PokemonCard = ({ imageUrl, name, type, base }: PokemonType) => {
  const typeString = type.join(" / ");
  const { language } = useLanguage();
  const pokemonName = getPokemonNameByLanguage(
    { name, type, base, imageUrl },
    language
  );

  return (
    <Card className="max-w-xs m-2 bg-primary border-2 border-primary rounded-xl shadow-md">
      <CardMedia
        component="img"
        alt="pokemon"
        src={imageUrl}
        className="object-cover bg-secondary w-full h-1/8"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {pokemonName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Types: {typeString}
        </Typography>
        <div className="bg-secondary rounded flex items-center justify-center p-4 mt-2">
          <div className="grid grid-cols-2 gap-x-0 gap-y-4 w-full">
            <p className="font-bold text-primary">HP: {base.HP}</p>
            <p className="font-bold text-primary">Attack: {base.Attack}</p>
            <p className="font-bold text-primary">Def: {base.Defense}</p>
            <p className="font-bold text-primary">Speed: {base.Speed}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
