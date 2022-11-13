import React from "react";
import ProductsCp from "./ProductsCp";

export default function Main(props) {
  const { space, onAdd } = props;
  return (
    <>
      <main>
        <div className="row">
          {space.map((space) => (
            <ProductsCp key={space.id} space={space} onAdd={onAdd}></ProductsCp>
          ))}
        </div>
      </main>
    </>
  );
}
