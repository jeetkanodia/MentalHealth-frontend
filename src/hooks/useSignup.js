import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const API = import.meta.env.VITE_API_ADDRESS;

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(`${API}/api/user/signup`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "Something went wrong!");
      setIsLoading(false);
    }
    if (response.ok) {
      // save token in local storage
      localStorage.setItem("user", JSON.stringify(data));

      // update the auth context
      dispatch({ type: "LOGIN", payload: data });

      setIsLoading(false);
    }
  };
  return { signup, error, isLoading };
};
