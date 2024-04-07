import React from "react";

export default function Choices ({ choices, makeChoice, classies }) {
  return(
    <section>
      <ul>
        {choices.map((choice, index) => (
          <li className={"choices " + classies} key={index} 
              onClick={() => makeChoice(index)}>
            {choice.text}
          </li>
        ))}
      </ul>
  </section>
  )
}