import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(5);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  //   sirve para sacar mediciones despues de un render
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout - BreakingBad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pTag} className="mb-3">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={increment} className="btn btn-primary">
        Siguiente quote
      </button>
    </div>
  );
};
