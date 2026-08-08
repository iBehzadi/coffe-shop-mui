import React, { useDebugValue, useState } from "react";

export default function useFormFields(initialState = {}) {
  const [fields, setFields] = useState(initialState);
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  useDebugValue("custom form hook");
  return [fields, handleChange, setFields];
}
