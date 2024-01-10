"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

// 因為如果出現錯誤，我們會希望把error的log記錄下來
const ErrorPage = ({ error, reset }: Props) => {
//   console.log("Error", error);
  return <>
  <div>An unexpected error has occurred</div>
  <button className="btn" onClick={()=> reset()}>Retry</button>
  </>;
};

export default ErrorPage;
