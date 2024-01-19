"use client";
import { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
};

export default Client;