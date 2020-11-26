import React from "react";

// 2
const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

export default function Playground() {
  document.title = "Playground";

  // 1
  type AppProps = { message: string }; /* could also use interface */
  const Pokus = ({ message }: AppProps) => (
    <div className="col-12">{message}</div>
  );

  // 2
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="row">
        <a
          className="col-12"
          href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components"
        >
          1. Function Components
        </a>
        <Pokus message="ahoj" />
      </div>

      <div className="row">
        <a
          className="col-12"
          href="https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks"
        >
          2. Hooks
        </a>
      </div>
      <div className="col-12">Count: {state.count}</div>
      <div className="col-12">
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: "5",
            })
          }
        >
          minus
        </button>{" "}
        &nbsp;{" "}
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 5,
            })
          }
        >
          plus
        </button>
      </div>
    </div>
  );
}
