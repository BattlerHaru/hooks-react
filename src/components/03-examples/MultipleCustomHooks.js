import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(5);

  const { loading, data, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // la doble !! se utiliza para en caso de tener null cambiarlo a falso
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-primary">
        Siguiente quote
      </button>
    </div>
  );
};
