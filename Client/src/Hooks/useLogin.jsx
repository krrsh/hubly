import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const login = async (name, password) => {
    console.log(name, password);
    if (name.trim() === "" || password.trim() === "") {
      setError("Enter the Required field!");
      return;
    }

    // const response = await fetch(`https://wrktbuddy.onrender.com/api/users/login`, {
    const response = await fetch(`https://hubly-mbkb.onrender.com/api/users/login`, {
    // const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, password }),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.Error);
      return;
    }

    if (response.ok) {
      setError(null);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    }
  };

  return { login, error };
};
