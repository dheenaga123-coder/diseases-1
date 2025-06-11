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
          setPrediction("Please consult a doctor.");
        }
        setLoading(false);
      }, 1500);
    }
  }, [symptoms]);

  return (
    <div>
      <h2>Prediction Result</h2>
      {loading ? <p>Predicting...</p> : <p>{prediction}</p>}
    </div>
  );
}
