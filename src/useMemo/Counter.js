import React, { useMemo, useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //   useMemo(() => {}, [])

  const isEven = useMemo(() => {
    let i = 0;

    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <h2>useMemo Hook</h2>
      <div>
        <h3>count : {counterOne}</h3>
        <button onClick={incrementOne}>increment one</button>
      </div>
      <span>{isEven ? "even" : "odd"}</span>
      <div>
        <h3>Count: {counterTwo}</h3>
        <button onClick={incrementTwo}>increment two</button>
      </div>
    </div>
  );
}
export default Counter;
