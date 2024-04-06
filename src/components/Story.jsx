import React from "react";

export default function Story ({ sceneText, classies }) {
  return(
    <section className={"story-text " + classies}>
      {sceneText.map((text, idx) => <p key={idx}>{text}</p>)}
    </section>
  )
}