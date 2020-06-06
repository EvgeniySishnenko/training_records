import React, { useState } from "react";
import "./App.css";
import Item from "./Components/trainingRecords/Item";
// import moment from "moment";
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
      training
        .concat([
          {
            id: nanoid(),
            date: input.date,
            passed: input.passed,
          },
        ])
        .sort()
        .reverse()
    );
    // e.target.passed.value = "";
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
        <div className="result">
          <div className="heading">
            <div className="heading-date">Дата</div>
            <div className="heading-passed">Пройдено</div>
            <div className="heading-act">Действия</div>
          </div>
          <div className="list">
            {training.map((a) => (
              <Item key={a.id} training={a} onRemove={removeTraining} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
