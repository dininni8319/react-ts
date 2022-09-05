import React from "react";

const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEventHandler) => {
      console.log(event);  
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('hello');
    
  }
  return <div>
    <input onChange={(e) => console.log(e)} />
    <div draggable onDragStart={onDragStart}>I been dragged!</div>
  </div>
}

export default EventComponent;