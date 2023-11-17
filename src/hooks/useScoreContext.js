import { ScoreContext } from "../context/ScoreContext";
import { useContext } from "react";

export const useScoreContext = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("ScoreContext must be used within an ScoreContextProvider");
  }
  return context;
};
