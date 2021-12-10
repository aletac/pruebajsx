import "./styles.css";
import Board from "./Board";
import Card from "./Card";
import { useState, useEffect } from "react";
import { fetchOtherPokemon } from "./utils";

//1. create a table (name, heigth, id, img) of the first 150 pokemon
//2. filter the pokemon by name

const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

export default function App() {
  useEffect(() => {
    fetchOtherPokemon(url, setState);
  }, []);

  const [state, setState] = useState([]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Card
        name="hola mundo¡¡¡"
        url="https://pokeapi.co/api/v2/pokemon/ditto"
      />
      <Board data={state} />
    </div>
  );
}
