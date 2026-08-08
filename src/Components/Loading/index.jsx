import React from "react";
import { Grid } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Grid color="blue"/>
    </div>
  );
}
