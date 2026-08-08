import React, { useState } from "react";
import notify from "d:/front/029 skeleton-ref-otp -- context - global state (x)/src/Utils/notify";

export default function Register({ handlePageType }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    notify('success','register successfully')
  };
  return (
    <form onClick={handleSubmit}>
      <h2>Register Form</h2>
      <input type="text" name="" id="" placeholder="Type your username..." />
      <input type="password" name="" id="" placeholder="Type your password" />
      <input type="email" name="" id="" placeholder="type your email" />
      <button type="submit">Register</button>
      <span onClick={handlePageType}>Have account? Click Here.</span>
    </form>
  );
}
