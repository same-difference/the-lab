import { connect } from "react-redux";
import Scene from "./components/Scene";
import Choices from "./components/Choices";
import Story from "./components/Story";
import { makeChoice } from "./state/actions";
import { useState, useEffect, useCallback } from "react";
import Ending from "./components/Ending";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";


const start_classies = {
  state: "start",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col justify-center items-center z-0",
  scene: "w-1/5 h-2/3 text-teal-900 bg-teal-100/90 flex flex-col outline outline-offset-4 outline-2 outline-teal-200 self-center text-2xl rounded-md z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-300/20 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const bulletin_classies = {
  state: "bulletin",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col items-center z-0",
  scene: "w-11/12 my-7 text-teal-900 flex flex-col text-2xl z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-300/20 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const choice_classies = {
  state: "choice",
  appies: "h-dvh w-screen bg-teal-300 bodyfont flex flex-col justify-center items-center z-0",
  scene: "w-1/5 h-2/3 text-teal-900 bg-teal-100/90 flex flex-col outline outline-offset-4 outline-2 outline-teal-200 self-center text-2xl rounded-md z-20",
  story: "text-2xl z-20",
  choices: "text-xl z-20 text-center text-teal-900 hover:text-teal-700 hover:cursor-pointer hover:tracking-wider mx-auto py-0.5 mt-4 px-3 outline outline-offset-2 outline-1 hover:outline-2 hover:outline-offset-4 outline-teal-300/20 hover:outline-teal-500/90 rounded-2xl bg-white/80",
  ending: "hidden"
}

const ending_classies = {
  state: "ending",
  appies: "h-dvh w-screen bg-teal-200 flex flex-col justify-center items-center",
  scene: "bg-gray-100 self-center text-2xl",
  story: "hidden",
  choices: "hidden",
  ending: "text-4xl"
}



function App(props) {
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
    if (props.tags.screen == "start") {
      setClassies(start_classies);
    }
    else if (props.tags.screen == "bulletin") {
      setClassies(bulletin_classies);
    }
    else if (props.tags.screen == "choice") {
      setClassies(choice_classies);
    }
  }, [props.tags.screen]);

  useEffect(() => {
    if (props.ending) {
      setClassies(ending_classies);
    }
  }, [props.ending]);

  let story = <Story sceneText={props.sceneText} classies={classies.story} />
  let choices = <Choices choices={props.currentChoices} makeChoice={props.makeChoice} classies={classies.choices} key="choices" />
  let ending = <Ending classies={classies.ending} key="ending" />


  return(
    <div className={"App " + classies.appies}>
      {init && <Particles id="tsparticles z-10" particlesLoaded={particlesLoaded} options={{background: { opacity: 0, }, preset: "links"}} />}
      
      <Scene tags={props.tags} classies={classies.scene} classState={classies.state} story={story} choices={choices} ending={ending} />
      
    </div>
  )
};

  const stateToProps = state => ({
    tags: state.tags,
    currentChoices: state.currentChoices,
    sceneText: state.sceneText,
    ending: state.ending
  });
  const dispatchToProps = dispatch => ({
    makeChoice: idx => dispatch(makeChoice(idx))
  });
  export default connect(stateToProps, dispatchToProps)(App);