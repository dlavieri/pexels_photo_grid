import React from "react";
import Container from "./components/Container";
import Item from "./components/Item";
import Draggable from "./components/Draggable";

const data = [
  { name: "David Lavieri", id: "100" },
  { name: "Gil Feig", id: "101" },
  { name: "Marek Zwick", id: "102" },
  { name: "Elon Musk", id: "103" },
];

const App = () => {
  const [items, setItems] = React.useState(data);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleDragStart = (e) => {
    console.log(e.target);
  };

  const handleDragEnd = (e) => {};

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {};

  return (
    <>
      <h1>This is a React App.</h1>
      <Container onDragOver={handleDragOver} onDrop={handleDrop}>
        {items.map((item) => {
          return (
            <Draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              key={item.id}
            >
              <Item name={item.name}></Item>
            </Draggable>
          );
        })}
      </Container>
    </>
  );
};

export default App;
