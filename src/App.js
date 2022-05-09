import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
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

  return (
    <div className="App">
      {characterImage?.length > 0 ? (
        <div className="container">
          {characterImage.map(char => (
            <Card imageLink={char.image} status={char.status} />
          ))}
        </div>
      ) : (
        <div className="empty">Empty</div>
      )}
    </div>
  );
}

export default App;
