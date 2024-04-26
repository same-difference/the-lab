import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

export default function Scene({ tags, classies, classState, setClassState, story, choices }) {
  const [content, setContent] = useState();

  useEffect(() => {
    if (classState == "true_start") setContent(trueStartContent);
    else if (classState == "start") setContent(startContent);
    else if (classState == "bulletin") setContent(bulletinContent);
    else if (classState == "choice") setContent(choiceContent);
    else if (classState == "ending") setContent(endingContent);

  }, [classState, choices]);

  let trueStartContent=<>
    <h1 className="text-4xl mt-10 mb-6 text-teal-900 headfont text-center">Welcome to <strong className="text-teal-700">The Lab</strong></h1>
    <iframe className="w-[448px] max-w-full aspect-video mx-auto" src="https://www.youtube.com/embed/ZVeHn-Oalos?si=gaC_Bo4zj3mOuRw9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p className="w-3/4 mt-3 mx-auto text-md"><span className="text-teal-700">The Lab</span> is a choose-your-own-adventure game set in a magical laboratory.</p>
    <p className="w-3/4 mx-auto py-4 text-base">In it, you play as Erin, a young woman with chronic illness. This limits the amount of energy she has in a day, the amount of which she typically cannot predict.</p>
    <p className="w-3/4 mx-auto text-base">The amount can be described, though. This is done using <a href="https://en.wikipedia.org/wiki/Spoon_theory" target="_blank" className="text-teal-700 underline cursor-pointer">spoons</a> 🥄.</p>
    <p className="w-3/4 mx-auto pt-10 text-base">You must complete all your tasks for the week, no matter how many spoons you have.</p>
    <button onClick={() => setClassState("start")} className="text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-8 mb-10 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-500/50 hover:outline-teal-500/90 rounded-2xl bg-white/80">Let's Do This</button>
  </>

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
  {choices}
  </>

  let bulletinContent = <><nav className="headfont w-9/10 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200 flex flex-row"><span className="w-1/3">Hey, Erin!</span> <span className="text-center w-1/3">{(tags.today !== undefined) ? "Today is " + tags.today + " the " + tags.todate + "th" : "It's a great day to be a Mage."}</span> <span className="text-right w-1/3">{Array.from({ length: tags.spoons }, (_, i) => (<>🥄</>))}</span></nav>
  
  <div className="w-9/10 mt-8 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200">{story}</div>
  {choices}
  </>

  let choiceContent = <><nav className="headfont w-9/10 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200 flex flex-row"><span className="w-1/3">Hey, Erin!</span> <span className="text-center w-1/3">{(tags.today !== undefined) ? "Today is " + tags.today + " the " + tags.todate + "th" : "It's a great day to be a Mage."}</span> <span className="text-right w-1/3">{Array.from({ length: tags.spoons }, (_, i) => (<>🥄</>))}</span></nav>
    <div className="w-9/10 mt-8 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200">{story}</div>
    {choices}
    </>

  let endingContent = <>
  <div className="headfont w-1/3 mx-auto bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200 text-center">You've completed the week.</div>
  <div className="w-1/3 mx-auto mt-8 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200">{tags.taskCount == 10 ? "You've completed your tasks too. Good work." : `You only completed ${tags.taskCount} tasks, though. \n How come?`}</div>
  </>

  return (
    <section className={"scene " + classies}>
      { content }
    </section>
  )
}