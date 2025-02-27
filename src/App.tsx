import { useState } from "react";
import "./App.css";

import PokemonGrid from "./components/PokemonGrid";

function App() {
  const [rowData, setRowData] = useState([
    {
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      name: "Bulbasaur",
    },
    {
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      name: "Ivysaur",
    },
  ]);

  const searchPokemon = (event: any) => {
    const searchValue = event.target.value;
    alert(searchValue);
  };

  return (
    <div className="flex flex-col m-32 space-y-4">
      <div className="mb-10">
        <h1 className="font-bold">Pok&eacute;mon Finder</h1>
        <span className="">El que quiere Pok&eacute;mon, que los busque</span>
      </div>
      <div className="flex flex-row space-x-4">
        <input
          type="text"
          placeholder="Ingrese el nombre a buscar"
          onChange={searchPokemon}
          className="flex flex-1 border border-gray-300 rounded-md p-2"
        />
        <button className="flex flex-0">Buscar</button>
      </div>
      <div>
        <h2>Resultados de la b&uacute;squeda</h2>
        <PokemonGrid rowData={rowData} />
      </div>
    </div>
  );
}

export default App;
