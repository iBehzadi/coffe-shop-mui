import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const [pageType, setPageType] = useState("login");
  const handlePageType = () => {
    setPageType(pageType == "register" ? "login" : "register");
  };
  return (
    <>
      {pageType == "login" ? (
        <Login handlePageType={handlePageType} />
      ) : (
        <Register handlePageType={handlePageType} />
      )}
    </>
  );
}
