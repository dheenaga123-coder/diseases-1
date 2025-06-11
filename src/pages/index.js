import React, { useState } from "react";
import SymptomForm from "../components/SymptomForm";
import PredictionResult from "../components/PredictionResult";

export default function Home() {
  const [userSymptoms, setUserSymptoms] = useState([]);

  const handlePrediction = (symptoms) => {
    setUserSymptoms(symptoms);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Disease Prediction App</h1>
      <SymptomForm onPredict={handlePrediction} />
      <PredictionResult symptoms={userSymptoms} />
    </div>
  );
}
s