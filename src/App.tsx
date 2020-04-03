import React from "react";
import { Counter } from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      <h1>React with Typescript</h1>
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
