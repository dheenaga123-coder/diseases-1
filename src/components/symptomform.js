import React, { useState, useEffect } from "react";

export default function SymptomForm({ onPredict }) {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    setSymptoms(["Fever", "Cough", "Fatigue", "Headache", "Nausea"]);
  }, []);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, value]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(selectedSymptoms);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Symptoms</h2>
      {symptoms.map((symptom, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={symptom}
            onChange={handleCheckboxChange}
          />
          <label>{symptom}</label>
        </div>
      ))}
      <button type="submit">Predict</button>
    </form>
  );
}
