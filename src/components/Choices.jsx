import React from "react";

export default function Choices ({ choices, makeChoice, classies }) {
  return(
    <section className={"choices " + classies}>
      <ul>
        {choices.map(choice => (
          <li key={choice.index} 
              onClick={() => makeChoice(choice.index)}>
            {choice.text}
          </li>
        ))}
      </ul>
  </section>
  )
}