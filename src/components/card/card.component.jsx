import React from "react";
import "./card.style.css";
export const Card = ({ monster: { id, name, email } }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set3&?size=180x180`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
