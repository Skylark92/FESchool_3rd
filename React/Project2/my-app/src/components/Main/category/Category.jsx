import React from "react";
import "./category.css";

export default function Category({ category }) {
  console.log(category);
  return (
    <dl class="category">
      <dt class="a11y-hidden">Category</dt>
      {category.map((name, i) => (
        <dd key={i}>{name}</dd>
      ))}
    </dl>
  );
}
