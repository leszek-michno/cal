import React, { useState } from "react";
import NoAlco from "./NoAlco";


const Softs = ({item}) => {
  const [totalSoftIncome, setTotalSoftIncome] = useState(0);
  const softs = [
    {
      id: 1,
      name: "Coca cola",
      price: 6,
      income: 0,
    },
    {
      id: 2,
      name: "Coca cola ZERO",
      price: 6,
      income: 0,
    },
    {
      id: 3,
      name: "Tonik",
      price: 6,
      income: 0,
    },
    {
      id: 4,
      name: "Sprite",
      price: 6,
      income: 0,
    },
    {
      id: 5,
      name: "Red Bull",
      price: 10,
      income: 0,
    },
    {
      id: 6,
      name: "Red Bull Light",
      price: 10,
      income: 0,
    },
  ];

  const Softs = softs.map((soft) => <NoAlco key={soft.id} soft={soft} />);

  const handleTotalSoftIncome = () => {
    const allSofts = softs.map((soft) => soft.income);
    setTotalSoftIncome(allSofts.reduce((a, b) => a + b, 0));
       
   };
  
  return (
    <div className="grey">
      <h1>Napoje bezalkoholowe</h1>
      {Softs}
      <button onClick={handleTotalSoftIncome}>Podsumowanie</button>
      <h2>Napoje bezalkoholowe {(item.softIncome = totalSoftIncome.toFixed(2))} zł</h2>
      <hr />
    </div>
  );
};

export default Softs;
