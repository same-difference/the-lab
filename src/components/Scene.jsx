import React from "react";



export default function Scene({ tags, classies }) {
  return (
    <section className={"scene " + classies}>
      {console.log(tags)}
    </section>
  );
}