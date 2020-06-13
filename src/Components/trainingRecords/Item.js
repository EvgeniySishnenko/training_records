import React from "react";

function Item(props) {
  const { training } = props;
  const onRemove = (e) => {
    props.onRemove(e.target.dataset.id);
  };

  return (
    <div className="item">
      <div className="item-date">{training.date}</div>
      <div className="item-passed">{training.passed}</div>
      <div className="item-act">
        {/* <span className="edit">Edit</span> */}
        <span onClick={onRemove} className="del" data-id={training.id}>
          Del
        </span>
      </div>
    </div>
  );
}

export default Item;
