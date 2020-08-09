import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DragableColorBox from "./DragableColorBox";

function DragableColorList({ colors, removeColor }) {
  colors.map((color, i) => console.log(color.name));
  console.log(colors);
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DragableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
}
export default SortableContainer(DragableColorList);
