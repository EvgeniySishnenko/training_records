import React, { useState } from "react";
import "./App.css";
import Result from "./Components/trainingRecords/Result";
import { nanoid } from "nanoid";
import Form from "./Components/trainingRecords/Form";

function App() {
  const [training, setTrainig] = useState([]);
  let arr = [];

  function addTraining(input) {
    arr = training;

    if (training.length !== 0) {
      const index = arr.findIndex((el) => {
        return el.date === input.date;
      });
      if (index >= 0) {
        arr[index]["passed"] += Number(input.passed);
        setTrainig([...arr]);
      } else {
        arr = [
          ...training,
          {
            id: nanoid(),
            date: input.date,
            passed: Number(input.passed),
          },
        ];

        setTrainig(arr);
      }
    } else {
      setTrainig([
        {
          id: nanoid(),
          date: input.date,
          passed: Number(input.passed),
        },
      ]);
    }
  }

  function removeTraining(id) {
    setTrainig(training.filter((training) => training.id !== id));
  }

  return (
    <div className="App">
      <div className="container">
        <Form addTraining={addTraining} />
        <Result training={training} removeTraining={removeTraining} />
      </div>
    </div>
  );
}

export default App;
