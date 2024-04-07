import { connect } from "react-redux";
import { makeChoice } from "./state/actions";
import Scene from "./components/Scene";
import Choices from "./components/Choices";
import Story from "./components/Story";
import { useState, useEffect, useCallback } from "react";
import Ending from "./components/Ending";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";


const start_classies = {
  state: "start",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col justify-center items-center z-0",
  scene: "w-1/5 h-2/3 text-teal-900 bg-teal-100/90 flex flex-col outline outline-offset-4 outline-2 outline-teal-200 self-center text-2xl rounded-md z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-300/20 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const bulletin_classies = {
  state: "bulletin",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col items-center z-0",
  scene: "w-11/12 my-7 text-teal-900 flex flex-col text-2xl z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-300/20 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const choice_classies = {
  state: "choice",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col items-center z-0",
  scene: "w-11/12 my-7 text-teal-900 flex flex-col text-2xl z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider w-fit mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-300/20 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const ending_classies = {
  state: "ending",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col items-center z-0",
  scene: "w-11/12 my-7 text-teal-900 flex flex-col text-2xl z-20",
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
  const [ init, setInit ] = useState(false);
  const [classies, setClassies] = useState(start_classies);

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
    if (tags.screen == "start") {
      setClassies(start_classies);
    }
    else if (tags.screen == "bulletin") {
      setClassies(bulletin_classies);
    }
    else if (tags.screen == "choice") {
      setClassies(choice_classies);
    }
  }, [tags.screen]);

  useEffect(() => {
    if (ending) {
      setClassies(ending_classies);
    }
  }, [ending]);

  return(
    <div className={"App " + classies.appies}>
      {init && <Particles id="tsparticles z-10" particlesLoaded={particlesLoaded} options={{background: { opacity: 0, }, preset: "links"}} />}
      
      <Scene tags={tags} classies={classies.scene} classState={classies.state} 
      story={<Story storytext={sceneText} classies={classies.story} />}
      choices={<Choices choices={currentChoices} makeChoice={makeChoice} classies={classies.choices} />} />
      
    </div>
  )
};

  
  export default connect(stateToProps, dispatchToProps)(App);