import { useQuery } from "@tanstack/react-query";

const fetchPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1304`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon");
  return res.json();
};

export const usePokemon = () => {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemon,
  });
};
