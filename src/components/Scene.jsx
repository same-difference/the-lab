import React, { useEffect, useState } from "react";



export default function Scene({ tags, classies, classState, children }) {
  const [content, setContent] = useState();

  useEffect(() => {
    if (classState == "start") setContent(startContent);
    else if (classState == "bulletin") setContent(bulletinContent);
    else if (classState == "choice") setContent(choiceContent);
    else if (classState == "ending") setContent(endingContent);

  }, [classState]); 

  let startContent = <>
  <img src="erin.png" className="rounded-full bg-center w-fit aspect-square bg-origin-content bg-auto p-8 self-center" />
  
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
      { children }
    </section>
  )
}