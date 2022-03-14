import React, { useState } from "react";
import "../styles/softs.css";

const NoAlco = ({ soft }) => {
  const [cargo, setCargo] = useState("");
  const [startBottles, setStartBottles] = useState("");
  const [soldBottles, setSoldBottles] = useState("");
  

  const cargoSoft = (e) => setCargo(e.target.value);
  const startB = (e) => setStartBottles(e.target.value);
  const soldB = (e) => setSoldBottles(e.target.value);

  
  const finalState = cargo * 1 + startBottles * 1 - soldBottles;
  const softIncome = soldBottles * soft.price; 

  return (
    <div>
      <p>{soft.name}</p>
      <span>cena: {soft.price} zł </span>
      <input
        className={cargo > 0 ? "color" : " " && cargo < 0 ? "alarm" : " "}
        type="number"
        value={cargo}
        onChange={cargoSoft}
        placeholder="dostawa"
      />
      <input
       className={startBottles >= 0 ? "blue" : "alarm"}
        type="number"
        value={startBottles}
        onChange={startB}
        placeholder="stan początkowy"
      />

      <input
      className={soldBottles < 0 && "alarm"}
        type="number"
        value={soldBottles}
        onChange={soldB}
        placeholder="sprzedano"
      />
      <span>stan końcowy:  <strong>{finalState}</strong> butelek; </span>
      <span>dochód w zł: <strong>{soft.income = softIncome}</strong></span>
      <hr />
    </div>
  );
};

export default NoAlco;
