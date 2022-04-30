import React from "react";

const Draggable = ({ children, onDragStart, onDragEnd }) => {
  console.log();
  React.Children.only;

  return React.cloneElement(
    children,
    {
      draggable: "true",
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
    },
    null
  );
};

export default Draggable;
