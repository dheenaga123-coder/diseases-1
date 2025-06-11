import React, { useState, useEffect } from "react";

export default function SymptomForm({ onPredict }) {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSymptoms(["Fever", "Cough", "Fatigue", "Headache", "Nausea"]);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedSymptoms([...selectedSymptoms, value]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected symptoms:", selectedSymptoms);
    onPredict(selectedSymptoms);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Symptoms</h2>
      {symptoms.map((symptom, idx) => (
        <div key={idx}>
          <input
            type="checkbox"
            value={symptom}
            onChange={handleChange}
          />
          <label>{symptom}</label>
        </div>
      ))}
      <button type="submit">Predict</button>
    </form>
  );
}
