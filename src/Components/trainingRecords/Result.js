import React from "react";
import Item from "./Item";
import moment from "moment";

function Result({ training, removeTraining }) {
  const res = training
    .sort((a, b) => {
      return moment(b.date) - moment(a.date);
    })
    .filter((thing, index, self) => {
      return (
        index ===
        self.findIndex((t) => {
          if (t.date == thing.date) {
            return [{ passed: Number(t.passed) + Number(thing.passed) }];
          }
        })
      );
    });

  return (
    <div className="Result">
      <div className="heading">
        <div className="heading-date">Дата</div>
        <div className="heading-passed">Пройдено</div>
        <div className="heading-act">Действия</div>
      </div>
      <div className="list">
        {res.map((a) => (
          <Item key={a.id} training={a} onRemove={removeTraining} />
        ))}
      </div>
    </div>
  );
}

export default Result;
