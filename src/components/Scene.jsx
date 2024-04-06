import React, { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';



export default function Scene({ tags, classies, classState, story, choices, ending }) {
  const [content, setContent] = useState();

  useEffect(() => {
    if (classState == "start") setContent(startContent);
    else if (classState == "bulletin") setContent(bulletinContent);
    else if (classState == "choice") setContent(choiceContent);
    else if (classState == "ending") setContent(endingContent);

  }, [classState]);

  let startContent = <>
  <img src="erin.png" className="rounded-full bg-center w-fit aspect-square bg-origin-content bg-auto p-8 self-center" />
  <p className="text-4xl text-teal-900 headfont -mt-5 text-center">Erin Caldera</p>
  <div className="text-2xl self-center w-10/12 px-4 mt-3 mb-2 py-1 rounded-xl bg-teal-300/30">
  <Typewriter
    options={{
      strings: ['********************'],
      autoStart: true,
      delay: "natural",
      loop: false,
      pauseFor: 9999999,
    }} />
    </div>
  {story}
  {choices}
  </>

  let bulletinContent = <>
  <p>This is the {classState} state.</p>
  </>

  let choiceContent = <>
    <p>This is the {classState} state.</p>
    </>

  let endingContent = <>
  <p>This is the {classState} state.</p>
  </>

  return (
    <section className={"scene " + classies}>
      { content }
    </section>
  )
}