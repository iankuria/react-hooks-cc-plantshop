

import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  function handleClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ soldOut: !soldOut }),
    })
      .then((res) => res.json())
      .then(() => onToggleSoldOut(id));
  }

  return (
    <div className="plant-card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => onToggleSoldOut(id)}>
        {soldOut ? "Sold Out" : "Available"}
      </button>
    </div>
  );
}

export default PlantCard;

