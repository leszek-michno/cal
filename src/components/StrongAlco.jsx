import React, { useState } from "react";
import Vodka from "./Vodka";

const StrongAlco = ({soft}) => {

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
    {
      id: 6,
      name: "Gin Bombay (40ml)",
      volume: 700,
      priceFortyM: 16,
      fullBottleWeight: 1150,
      emptyBottleWeight: 500,
      alcoWeight: 650,
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
      <h1>Mocne alkohole</h1>
      <hr />
      {Vodkas}
      <h2> Mocne alkohole {totalVodkaIncome} zł</h2>
      <button onClick={handleTotalIncome}>Podsumowanie</button>
      <hr />       
    </div>
  );
};

export default StrongAlco;
