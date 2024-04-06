import { connect } from "react-redux";
import Scene from "./components/Scene";
import Choices from "./components/Choices";
import Story from "./components/Story";
import { makeChoice } from "./state/actions";
import { useState, useEffect, useCallback } from "react";
import Ending from "./components/Ending";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

const bulletin_classies = {
  appies: "h-dvh w-screen bg-indigo-200",
  scene: "text-2xl",
  story: "text-2xl",
  choices: "text-2xl",
  ending: "hidden"
}

const start_classies = {
  appies: "h-dvh w-screen bg-red-200 z-0",
  scene: "text-2xl z-20",
  story: "text-2xl z-20",
  choices: "text-2xl z-20",
  ending: "hidden"
}

const choice_classies = {
  appies: "h-dvh w-screen bg-lime-200",
  scene: "text-2xl",
  story: "text-2xl",
  choices: "text-2xl",
  ending: "hidden"
}

const ending_classies = {
  appies: "h-dvh w-screen bg-teal-200",
  scene: "hidden",
  story: "hidden",
  choices: "hidden",
  ending: "block text-4xl place-self-center"
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
    console.log(container);
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
  
  return(
    <div className={"App " + classies.appies}>
      {init && <Particles id="tsparticles z-10" particlesLoaded={particlesLoaded} options={{background: { opacity: 0, }, preset: "links"}} />}
      
      <Ending classies={classies.ending}/>
      <Scene tags={props.tags} classies={classies.scene} />
      <Story sceneText={props.sceneText} classies={classies.story} />
      <Choices choices={props.currentChoices} makeChoice={props.makeChoice} classies={classies.choices} />
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