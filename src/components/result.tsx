import React from "react";

export default function Result({ name, year }) {
  return (
    <p>
      <span>{name} </span>
      <span>({year})</span>
    </p>
  );
}
