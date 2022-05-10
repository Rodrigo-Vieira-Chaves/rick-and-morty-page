import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  const [characterImage, setCharacterImage] = useState([]);

  const getRickAndMortyData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const respJson = await response.json();

    setCharacterImage(respJson.results);
  };

  useEffect(() => {
    getRickAndMortyData();
  }, []);

  return <Layout props={characterImage} />;
}

export default App;
