import React, { useState } from "react";

const Vodka = ({ vodka }) => {
  const [cargoBottles, setCargoBottles] = useState("");
  const [startFullBottles, setStartFullBottles] = useState("");
  const [startWeightOpenBottel, setStartWeightOpenBottle] = useState("");
  const [endFullBottles, setEndFullBottles] = useState("");
  const [endWeightOpenBottel, setEndWeightOpenBottel] = useState("");

  const cargoB = (e) => {
    setCargoBottles(e.target.value);
  };
  const startFB = (e) => {
    setStartFullBottles(e.target.value);
  };
  const startWOB = (e) => {
    setStartWeightOpenBottle(e.target.value);
  };
  const endFB = (e) => {
    setEndFullBottles(e.target.value);
  };
  const endWOB = (e) => {
    setEndWeightOpenBottel(e.target.value);
  };

  const initialState =
    startWeightOpenBottel >= vodka.emptyBottleWeight
      ? (cargoBottles * 1 + startFullBottles * 1) * vodka.alcoWeight +
        (startWeightOpenBottel * 1 - vodka.emptyBottleWeight)
      : (cargoBottles * 1 + startFullBottles * 1) * vodka.alcoWeight;

  const finalState =
    endWeightOpenBottel >= vodka.emptyBottleWeight
      ? endFullBottles * 1 * vodka.alcoWeight +
        (endWeightOpenBottel * 1 - vodka.emptyBottleWeight)
      : endFullBottles * 1 * vodka.alcoWeight;

   let income = ((initialState * 1 - finalState * 1) / (vodka.alcoWeight / 12.5) * vodka.priceFortyM * 1).toFixed(2)
   
   
  

  return (
    <div>
      <p>{vodka.name}</p>
      <span>
        cena: {vodka.priceFortyM} zł {""}
      </span>
      <input
        className={
          cargoBottles > 0 ? "color" : " " && cargoBottles < 0 ? "alarm" : " "
        }
        type="number"
        value={cargoBottles}
        onChange={cargoB}
        placeholder="dostawa"
      />
      <input
        className="blue"
        type="number"
        value={startFullBottles}
        onChange={startFB}
        placeholder="pełne na start"
      />
      <input
        className="blue"
        type="number"
        value={startWeightOpenBottel}
        onChange={startWOB}
        placeholder="waga otwartej na start"
      />
      <input
        className="yellow"
        type="number"
        value={endFullBottles}
        onChange={endFB}
        placeholder="pełne na koniec"
      />
      <input
        className="yellow"
        type="number"
        value={endWeightOpenBottel}
        onChange={endWOB}
        placeholder="waga otwartej na koniec"
      />
      <span >dochód w zł: {' '} <strong>
        {income >= 0 ? vodka.income = income * 1 : <span className="alert">błąd w zapisie</span>}
        </strong></span>
      <hr />
    </div>
  );
};

export default Vodka;

