import React from "react";

function Item(props) {
  const { title, img } = props;
  return (
    <>
      <img src={img} />
      <p>{title}</p>
    </>
  );
}
export default Item;
