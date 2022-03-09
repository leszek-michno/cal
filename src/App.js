import React, { useState } from "react";
import "./App.css";
import Vodka from "./components/Vodka";

const App = () => {

  const [totalVodkaIncome, setTotalIncome] = useState(0);  

  const [vodka, setVodka] = useState([
    {
      id: 1,
      name: "Wyborowa (40ml)",
      volume: 500,
      priceFortyM: 10,
      fullBottleWeight: 885,
      emptyBottleWeight: 385,
      alcoWeight: 500,
      income: 0,
    },

    {
      id: 2,
      name: "Spirytus (40ml)",
      volume: 500,
      priceFortyM: 20,
      fullBottleWeight: 865,
      emptyBottleWeight: 400,
      alcoWeight: 465,
      income: 0,
    },

    {
      id: 3,
      name: "Soplica Wiśniowa (40ml)",
      volume: 500,
      priceFortyM: 10,
      fullBottleWeight: 865,
      emptyBottleWeight: 387,
      alcoWeight: 465,
      income: 0,
    },
    {
      id: 4,
      name: "Soplica Pigwowa (40ml)",
      volume: 500,
      priceFortyM: 10,
      fullBottleWeight: 865,
      emptyBottleWeight: 412,
      alcoWeight: 465,
      income: 0,
    },
    {
      id: 5,
      name: "Soplica Śliwka (40ml)",
      volume: 500,
      priceFortyM: 10,
      fullBottleWeight: 865,
      emptyBottleWeight: 412,
      alcoWeight: 465,
      income: 0,
    },

  ]);

  const Vodkas = vodka.map((vodka) => <Vodka key={vodka.id} vodka={vodka} />);
  
  const handleTotalIncome = () => {
    const allVodkas = vodka.map((vodka) => vodka.income);
    setTotalIncome(allVodkas.reduce((a, b) => a + b, 0));
  };

  return (
    <div className="App">
      {Vodkas}
      <br />
      <button onClick={handleTotalIncome}>Podsumowanie</button>
      <h2> Wódki: {totalVodkaIncome} zł</h2>
       
    </div>
  );
};

export default App;
