import React from "react";

export default function Story ({ storytext, classies }) {
  return(
    <section className={"story-text " + classies}>
      {storytext.map((text, idx) => <p key={idx}>{text}</p>)}
    </section>
  )
}