import React, { useState, useEffect } from "react";

export default function SymptomForm({ onPredict }) {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    // Simulate loading symptom options
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
            id={`symptom-${idx}`}
          />
          <label htmlFor={`symptom-${idx}`}>{symptom}</label>
        </div>
      ))}

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Predict
      </button>
    </form>
  );
}
