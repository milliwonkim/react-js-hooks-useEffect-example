import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/**
 * useEffect will be called whenever count state changes
 * the second parameter in hooks functions works in the same way
 * and compares values with previous ones to be run.
 */
function App() {
  const [count, setCount] = useState(0);
  const [dummy, setDummy] = useState(0);

  useEffect(
    () => {
      console.log("I'm called on each render when count changes!");

      return () => {
        console.log("I'm called after component unmount!");
      };
    },
    [count] // use effect will be called when count changes
  );

  function handleClick() {
    setCount(count + 1);
  }
  function handleClickDummy() {
    setDummy(dummy + 1);
  }

  return (
    <>
      <div>You clicked count {count} times!</div>
      <div>You clicked dummy {dummy} times!</div>
      <button onClick={handleClick}>Click me for rendering!</button>
      <button onClick={handleClickDummy}>Click me for not render!</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
