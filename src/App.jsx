import { connect } from "react-redux";
import { makeChoice } from "./state/actions";
import Scene from "./components/Scene";
import Choices from "./components/Choices";
import Story from "./components/Story";
import { useState, useEffect, useCallback } from "react";
import Ending from "./components/Ending";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const true_start_classies = {
  state: "true_start",
  appies: "min-h-dvh w-screen bg-teal-300 bodyfont flex flex-col justify-center items-center z-0",
  scene: "w-5/6 md:w-3/5 lg:w-2/3 xl:w-1/2 2xl:w-1/3 max-w-[650px] h-fit my-10 p-2 text-teal-900 bg-teal-100/90 flex flex-col outline outline-offset-4 outline-2 outline-teal-200 self-center text-2xl rounded-md z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-50 mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-500/50 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const start_classies = {
  state: "start",
  appies: "min-h-dvh w-screen bg-teal-300 bodyfont flex flex-col justify-center items-center z-0",
  scene: "w-3/4 md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/5 max-w-[300px] h-fit text-teal-900 bg-teal-100/90 flex flex-col outline outline-offset-4 outline-2 outline-teal-200 self-center text-2xl rounded-md z-20",
  story: "text-2xl z-20",
  choices: "text-xl mb-10 z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-500/50 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const bulletin_classies = {
  state: "bulletin",
  appies: "min-h-dvh w-screen bg-teal-300 bodyfont flex flex-col items-center z-0",
  scene: "w-11/12 my-7 text-teal-900 flex flex-col text-2xl z-20",
  story: "text-2xl my-10 z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-4 px-3 outline outline-offset-4 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-200 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const choice_classies = {
  state: "choice",
  appies: "min-h-dvh w-screen bg-teal-300 bodyfont flex flex-col items-center z-0",
  scene: "w-11/12 my-7 text-teal-900 flex flex-col text-2xl z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-4 px-3 outline outline-offset-4 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-200 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const ending_classies = {
  state: "ending",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col items-center z-0",
  scene: "w-5/6 md:w-3/5 lg:w-2/3 xl:w-1/2 2xl:w-1/3 max-w-[650px] h-fit my-10 p-2 text-teal-900 bg-teal-100/90 flex flex-col outline outline-offset-4 outline-2 outline-teal-200 self-center text-2xl rounded-md z-20",
  story: "hidden",
  choices: "hidden",
  ending: "text-xl z-20 text-center text-teal-900 w-fit mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 outline-teal-100/90 rounded-2xl bg-white/80"
}

const stateToProps = state => ({
  tags: state.tags,
  currentChoices: state.currentChoices,
  sceneText: state.sceneText,
  ending: state.ending
})

const dispatchToProps = dispatch => ({
  makeChoice: idx => dispatch(makeChoice(idx))
})

function App({tags, currentChoices, sceneText, ending, makeChoice}) {
  const [init, setInit] = useState(false);
  const [classies, setClassies] = useState(true_start_classies);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
        await loadLinksPreset(engine);
    }).then(() => {
        setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  
  useEffect(() => {
    if (classies.state == "true_start") {
      setClassies(true_start_classies);
    }
    else if (tags.screen == "start") {
      setClassies(start_classies);
    }
    else if (tags.screen == "bulletin") {
      setClassies(bulletin_classies);
    }
    else if (tags.screen == "choice" && !ending) {
      setClassies(choice_classies);
    }
    else {
      setClassies(ending_classies);
    }
  }, [tags.screen, classies.state, ending]);

  

  return(
    <div className={"App " + classies.appies}>
      {init && <Particles id="tsparticles z-10" particlesLoaded={particlesLoaded} options={{background: { opacity: 0, }, preset: "links"}} />}
      <Scene tags={tags} classies={classies.scene} classState={classies.state} setClassState={setClassies}
      story={<Story storytext={sceneText} classies={classies.story} />}
      choices={<Choices choices={currentChoices} makeChoice={makeChoice} classies={classies.choices} />} />
      
    </div>
  )
};

  
  export default connect(stateToProps, dispatchToProps)(App);