import React, { useEffect, useRef, useState } from "react";
import useFormFields from "../../../Hooks/useFormFields";
import { getAuth } from "../../../Context/AuthContext";
import notify from "../../../Utils/notify";

export default function Login({ handlePageType }) {
  const [fields, handleChange, setFields] = useFormFields({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { handleToken } = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      if (!res.ok) {
        throw new Error("username or password incorrect!");
      }
      const data = await res.json();
      notify("success", "login successfully");
      handleToken(data.token);
    } catch (error) {
      notify("error", error.message);
    }
    setLoading(false);
  };
  return (
    <form
      className="flex flex-col w-87.5 rounded mx-auto my-8 shadow-lg p-4 text-center items-center justify-center gap-6"
      onSubmit={handleSubmit}
    >
      <h2 className="">Login Form</h2>
      <input
        name="username"
        value={fields.username}
        onChange={handleChange}
        className="w-full py-2 px-4"
        type="text"
      />
      <input
        name="password"
        value={fields.password}
        onChange={handleChange}
        className="w-full py-2 px-4"
        type="password"
      />
      <button
        className="bg-blue-500 w-full py-2 text-white rounded cursor-pointer hover:opacity-75 disabled:opacity-75"
        type="submit"
        disabled={loading}
      >
        {loading ? "Proccessing..." : "Login"}
      </button>
      <span className="text-xs cursor-pointer" onClick={handlePageType}>
        Don't have an account? Click Here.
      </span>
    </form>
  );
}
