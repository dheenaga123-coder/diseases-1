import React, { useState, useEffect } from "react";

export default function PredictionResult({ symptoms }) {
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (symptoms.length > 0) {
      setLoading(true);
      setTimeout(() => {
        if (symptoms.includes("Fever") && symptoms.includes("Cough")) {
          setPrediction("Possible Flu");
        } else {
          setPrediction("Consult Doctor");
        }
        setLoading(false);
      }, 1500);
    }
  }, [symptoms]);

  if (loading) return <p>Predicting...</p>;

  return (
    <div>
      <h2>Disease Prediction Result</h2>
      {prediction && <p><strong>Prediction:</strong> {prediction}</p>}
    </div>
  );
}
