import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";



function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants once on load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  // Code to add a neqw plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  
  function handleToggleSoldOut(id) {
    setPlants((prev) =>
      prev.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  }

  // Filtering by the search bar
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={displayedPlants} onToggleSoldOut={handleToggleSoldOut} />
    </div>
  );
}

export default App;
