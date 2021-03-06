import { useCounter } from "../../hooks/useCounter";
import { useState } from "react";
import { Small } from "./Small";

import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button
        className="btn btn-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
