import React, { useState } from "react";
import "./App.css";
import Result from "./Components/trainingRecords/Result";
import { nanoid } from "nanoid";
import { findLastIndex } from "lodash";
function App() {
  const [input, setInput] = useState([{}]);
  const [training, setTrainig] = useState([]);
  const valueForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  function removeTraining(id) {
    setTrainig(training.filter((training) => training.id !== id));
  }
  const handleForm = (e) => {
    e.preventDefault();
    setTrainig(
      training.concat([
        {
          id: nanoid(),
          date: input.date,
          passed: input.passed,
        },
      ])
    );
    e.target.passed.value = "";
    e.target.date.value = "";
    setInput({});
  };

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleForm}>
          <label htmlFor="date">
            <span className="heading-date">Дата</span>
            <input
              name="date"
              type="date"
              // onChange={(e) => setInput(e.target.value)}
              onChange={valueForm}
              value={input.date}
            />
          </label>
          <label htmlFor="passed">
            <span className="heading-passed">Пройдено</span>
            <input
              name="passed"
              type="number"
              // onChange={(e) => setInput(e.target.value)}
              onChange={valueForm}
              value={input.passed}
            />
          </label>
          {/* <input type="submit" onClick={handleBtn} value="OK" /> */}
          <button type="submit"> OK </button>
        </form>
        <Result training={training} removeTraining={removeTraining} />
      </div>
    </div>
  );
}

export default App;
