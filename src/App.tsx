import { useEffect, useState } from "react";
import "./App.css";

import PokemonGrid from "./components/PokemonGrid";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const [rowData, setRowData] = useState([]);
  const [filterText, setFilterText] = useState("");

  const { data, error, isFetching } = usePokemon();

  useEffect(() => {
    if (data) {
      setRowData(data.results);
    }
  }, [data]);

  return (
    <div className="flex flex-col mt-20 mb-10 md:mx-32 mx-12 space-y-4">
      <div className="mb-10">
        <h1 className="font-bold text-black">Pok&eacute;mon Finder</h1>
        <span className="text-black">
          El que quiere Pok&eacute;mon, que los busque
        </span>
      </div>
      <form
        className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const name = formData.get("pokemonName") as string;
          setFilterText(name);
        }}
      >
        <input
          type="text"
          name="pokemonName"
          placeholder="Ingrese el nombre a buscar"
          className="flex flex-1 border border-gray-300 rounded-md p-2 text-black"
        />
        <button
          type="submit"
          className="flex flex-0 justify-center"
          disabled={isFetching}
        >
          Buscar
        </button>
      </form>
      <div>
        {isFetching && <p>Cargando...</p>}
        {error && <p style={{ color: "red" }}>Uppppsss un error! :(</p>}
        {data && (
          <>
            <h2>Resultados de la b&uacute;squeda</h2>
            <PokemonGrid rowData={rowData} quickFilterText={filterText} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
