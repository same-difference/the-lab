import React from "react";

export default function Story ({ storytext, classies }) {
  return(
    <section className={"story-text " + classies}>
      {storytext.map((text, idx) => <p className="py-2 text-base lg:text-lg" key={idx}>{text}</p>)}
    </section>
  )
}