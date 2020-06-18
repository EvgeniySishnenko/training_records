import React, { useState } from "react";
import "./App.css";
import Result from "./Components/trainingRecords/Result";
import { nanoid } from "nanoid";
import { findLastIndex, filter } from "lodash";
import Form from "./Components/trainingRecords/Form";

function App() {
  const [training, setTrainig] = useState([]);
  function addTraining(input) {
    if (training.length !== 0) {
      training.map((a) => {
        if (a.date === input.date) {
          let arr = [
            ...training,
            {
              id: nanoid(),
              date: input.date,
              passed: Number(input.passed) + Number(a.passed),
            },
          ];
          arr.filter((s) => {
            // что тут нужно написать. Подскажите пожалуйста
          });
          setTrainig(arr);
        } else {
          setTrainig(
            training.concat([
              {
                id: nanoid(),
                date: input.date,
                passed: Number(input.passed),
              },
            ])
          );
        }
      });
    } else {
      setTrainig(
        training.concat([
          {
            id: nanoid(),
            date: input.date,
            passed: Number(input.passed),
          },
        ])
      );
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
