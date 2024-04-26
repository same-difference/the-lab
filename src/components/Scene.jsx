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
    <iframe className="w-[448px] max-w-full aspect-video mx-auto" src="https://www.youtube.com/embed/P0LvtPYOD4k?si=a6vsAZyVyLHyRZki" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p className="w-3/4 mt-3 mx-auto text-md"><span className="text-teal-700">The Lab</span> is a choose-your-own-adventure game set in a magical laboratory.</p>
    <p className="w-3/4 mx-auto py-4 text-base">In it, you play as Erin, a young woman with chronic illness. This limits the amount of energy she has in a day, the amount of which she typically cannot predict.</p>
    <p className="w-3/4 mx-auto text-base">The amount can be described, though. This is done using <a href="https://en.wikipedia.org/wiki/Spoon_theory" target="_blank" className="text-teal-700 underline cursor-pointer">spoons</a> 🥄.</p>
    <p className="w-3/4 mx-auto pt-10 text-base">You must complete all your tasks for the week, no matter how many spoons you have.</p>
    <button onClick={() => setClassState("start")} className="text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-8 mb-10 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-500/50 hover:outline-teal-500/90 rounded-2xl bg-white/80">Let's Do This</button>
  </>





  let startContent = <>
  <img src="erin.png" className="rounded-full bg-center w-fit max-h-[400px] aspect-square bg-origin-content bg-auto p-8 self-center" />
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





  let bulletinContent = <>
  <nav className="headfont w-9/10 md:5/6 xl:w-3/4 2xl:w-1/2 mx-auto bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200 flex flex-row">
    <span className="w-1/3">Hey, Erin!</span>
    <span className="text-center w-1/3">{(tags.today !== undefined) ? "Today is " + tags.today + " the " + tags.todate + "th" : "It's a great day to be a Mage."}</span>
    <span className="text-right w-1/3">{Array.from({ length: tags.spoons }, (_, i) => (<>🥄</>))}</span>
  </nav>
  <div className="mx-auto w-max place-content-center lg:flex lg:flex-row mb-8">
    <div className="w-9/10 md:5/6 mx-auto lg:mx-0 mt-8 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200 flex flex-col">
      <h1 className="text-4xl headfont text-teal-700 font-bold my-5 text-center">To Do</h1>
      <div className="w-5/6 mx-auto h-64 md:h-80 lg:h-96 overflow-y-auto mb-10">
        {tags.do_task1 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task1}</div>}
        {tags.do_task2 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task2}</div>}
        {tags.do_task3 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task3}</div>}
        {tags.do_task4 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task4}</div>}
        {tags.do_task5 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task5}</div>}
        {tags.do_task6 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task6}</div>}
        {tags.do_task7 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task7}</div>}
        {tags.do_task8 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task8}</div>}
        {tags.do_task9 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task9}</div>}
        {tags.do_task10 == 0 && <div className="w-5/6 md:w-2/3 text-base lg:text-lg bg-teal-500/20 mx-auto px-10 pt-5 pb-10 mb-10 break-inside-avoid">{tags.task10}</div>}
      </div>
    </div>
    
    <div className="w-max mx-auto lg:mr-0 lg:ml-10 my-8 bg-teal-100/90 rounded-md p-10 text-md outline outline-offset-4 outline-2 outline-teal-200">
      {tags.spoons == 0 && <img src="week_1.jpg" />}
      {tags.spoons == 1 && <img src="week_2.jpg" />}
      {tags.spoons == 2 && <img src="week_3.jpg" />}
      {tags.taskCount == 0 && <div>So much work to do</div>}
      {1 <= tags.taskCount && tags.taskCount < 3 && <audio controls src="13.m4a" type="audio/mpeg"></audio>}
      {3 <= tags.taskCount && tags.taskCount < 5 && <audio controls src="35.m4a" type="audio/mpeg"></audio>}
      {5 <= tags.taskCount && tags.taskCount < 7 && <audio controls src="57.m4a" type="audio/mpeg"></audio>}
      {7 <= tags.taskCount && tags.taskCount <= 9 && <audio controls src="79.m4a" type="audio/mpeg"></audio>}
      {tags.taskCount == 10 && <audio controls src="10.m4a" type="audio/mpeg"></audio>}
    </div>
  </div>
  
  {choices}
  </>





  let choiceContent = <>
  <nav className="headfont w-9/10 xl:w-3/4 2xl:w-1/2 mx-auto bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200 flex flex-row">
    <span className="w-1/3">Hey, Erin!</span>
    <span className="text-center w-1/3">{(tags.today !== undefined) ? "Today is " + tags.today + " the " + tags.todate + "th" : "It's a great day to be a Mage."}</span>
    <span className="text-right w-1/3">{Array.from({ length: tags.spoons }, (_, i) => (<>🥄</>))}</span>
  </nav>
    <div className="w-9/10 2xl:w-1/2 mx-auto my-8 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200">{story}</div>
    {choices}
    </>





  let endingContent = <>
  <div className="headfont w-1/3 mx-auto bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200 text-center">You've completed the week.</div>
  <div className="w-1/3 mx-auto mt-8 bg-teal-100/90 rounded-md p-2 text-md outline outline-offset-4 outline-2 outline-teal-200">{tags.taskCount == 10 ? "You've completed your tasks too. Good work." : `You only completed ${tags.taskCount} tasks, though. \n How come?`}</div>
  <audio controls src="10.m4a" type="audio/mpeg"></audio>
  </>

  return (
    <section className={"scene " + classies}>
      { content }
    </section>
  )
}