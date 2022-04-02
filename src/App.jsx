import React, { useState } from "react";
import "./App.css";
import StrongAlco from "./components/StrongAlco";
import Softs from "./components/Softs";


const App = () => {
  const totalIncome = [
    { id: 1, name: "Napoje bezalkoholowe", softIncome: "" },
    { id: 2, name: "alkohole wysokoprocentowe", strongAlcoIncome: "" },
  ];

  const [income, setIncome] = useState(0);

  const handleCaclulation = () => {
    setIncome(totalIncome.softIncome * 1 + totalIncome.strongAlcoIncome * 1);
  };

  return (
    <div className="grey">
      <Softs item={totalIncome} />
      <StrongAlco item={totalIncome} />
      <button onClick={handleCaclulation}>Końcowe podsumowanie</button>
      <h1>Razem: {income.toFixed(2)} zł</h1>
    </div>
  );
};

export default App;
