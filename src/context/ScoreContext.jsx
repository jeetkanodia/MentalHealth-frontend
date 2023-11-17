import { createContext, useReducer, useEffect } from "react";

export const ScoreContext = createContext();

export const scoreReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return {
        score: action.payload,
      };
    default:
      return state;
  }
};

export const ScoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scoreReducer, {
    score: 0,
  });

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    if (score) {
      dispatch({
        type: "UPDATE_SCORE",
        payload: score,
      });
    }
  }, []);
  console.log("ScoreContext state: ", state);

  return (
    <ScoreContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
