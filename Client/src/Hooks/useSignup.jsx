import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const signup = async (name, email, phone, password) => {
    console.log(name, email, phone, password);
    if (name.trim() === "" || password.trim() === "" || email.trim() === "" || phone.trim() === "") {
      setError("Enter the Required field!");
      return;
    }
    // else
    const response = await fetch(`http://localhost:4000/api/users/signup`, {
    // const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/signup`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, email, phone, password }),
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

  return { signup, error };
};
