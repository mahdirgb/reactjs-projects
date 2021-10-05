import { useState } from "react/cjs/react.development";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };
  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={addOneHandler}>add One</button>
      <button onClick={addTwoHandler}>add Two</button>
      <button onClick={addFiveHandler}>add Five</button>
    </div>
  );
};

export default HookCounter;
