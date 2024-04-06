import { connect } from "react-redux";
import Scene from "./components/Scene";
import Choices from "./components/Choices";
import Story from "./components/Story";
import { makeChoice } from "./state/actions";
import Calendar from "./components/Calendar";
import { useState, useEffect } from "react";

const bulletin_classies = {
  appies: "h-dvh w-screen bg-indigo-200",
  scene: "text-2xl",
  story: "text-2xl",
  choices: "text-2xl"
}

const start_classies = {
  appies: "h-dvh w-screen bg-red-200",
  scene: "text-2xl",
  story: "text-2xl",
  choices: "text-2xl"
}

const choice_classies = {
  appies: "h-dvh w-screen bg-lime-200",
  scene: "text-2xl",
  story: "text-2xl",
  choices: "text-2xl"
}

const ending_classies = {
  appies: "h-dvh w-screen bg-teal-200",
  scene: "text-2xl",
  story: "text-2xl",
  choices: "text-2xl"
}



function App(props) {
  const [classies, setClassies] = useState(start_classies);
  
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
      <Calendar />
      <Scene tags={props.tags} classies={classies.scene} />
      <Story sceneText={props.sceneText} classies={classies.story} />
      <Choices choices={props.currentChoices} makeChoice={props.makeChoice} classies={classies.setClassies} />
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