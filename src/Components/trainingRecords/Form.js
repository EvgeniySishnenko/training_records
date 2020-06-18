import React, { useState } from "react";

function Form({ addTraining }) {
  const [input, setInput] = useState([{}]);

  const valueForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    addTraining(input);
    e.target.passed.value = "";
    e.target.date.value = "";
    setInput({});
  };
  return (
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
  );
}
export default Form;
