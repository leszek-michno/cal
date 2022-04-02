import React, { useState } from "react";
import Vodka from "./Vodka";
import '../App.css'


const StrongAlco = ({item}) => {

  const [totalVodkaIncome, setTotalIncome] = useState(0);  

  const vodka= [
    {
      id: 1,
      name: "Spirytus (40ml)",
      volume: 500,
      priceFortyM: 20,
      fullBottleWeight: 885,
      emptyBottleWeight: 385,
      alcoWeight: 500,
      income: 0,
    },

    {
      id: 2,
      name: "Wyborowa (40ml)",
      volume: 500,
      priceFortyM: 10,
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
      fullBottleWeight: 1200,
      emptyBottleWeight: 500,
      alcoWeight: 700,
      income: 0,
    },

  ];

  const Vodkas = vodka.map((vodka) => <Vodka key={vodka.id} vodka={vodka} />);
  
  const handleTotalIncome = () => {
    const allVodkas = vodka.map((vodka) => vodka.income);
    const totalVodka = allVodkas.reduce((a, b) => a + b, 0)
    setTotalIncome(totalVodka.toFixed(2));
    
  };
  
  return (
    <div>
      <h1>Mocne alkohole</h1>
      {Vodkas}
      <button onClick={handleTotalIncome}>Podsumowanie</button>
      <h2> Mocne alkohole: {item.strongAlcoIncome = totalVodkaIncome}  zł</h2>
      <hr />       
    </div>
    
  );
};

export default StrongAlco;
