import ColorSwitcher from "./ColorSwitcher";
import React, { useReducer } from "react";

const App = () => {
  const ColorControl = ({ color, dispatch }) => {
    return (
      <div>
        <button
          onClick={() => dispatch({ type: `DECREMENT_${color.toUpperCase()}` })}
        >
          -
        </button>
        {color}
        <button
          onClick={() => dispatch({ type: `INCREMENT_${color.toUpperCase()}` })}
        >
          +
        </button>
      </div>
    );
  };
  return(
    <div className="flex flex-column justify-center items-center w-5"></div>
  )
  
};

