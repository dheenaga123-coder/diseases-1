import React, { useState, useEffect } from "react";

export default function PredictionResult({ symptoms }) {
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (symptoms.length > 0) {
      setLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        // Simple rule-based logic
        if (symptoms.includes("Fever") && symptoms.includes("Cough")) {
          setPrediction("Possible Flu");
        } else if (symptoms.includes("Headache") && symptoms.includes("Nausea")) {
          setPrediction("Possible Migraine");
        } else if (symptoms.includes("Fatigue")) {
          setPrediction("Possible Anemia");
        } else {
          setPrediction("Please consult a doctor.");
        }
        setLoading(false);
      }, 1500);
    } else {
      setPrediction("");
    }
  }, [symptoms]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Prediction Result</h2>
      {loading ? (
        <p>Predicting...</p>
      ) : (
        prediction && <p><strong>Prediction:</strong> {prediction}</p>
      )}
    </div>
  );
}
