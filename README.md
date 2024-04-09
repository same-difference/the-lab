# The Lab
Erin's a rookie artificer at a magical lab. In this game you play as her, trying to get all your work done by the end of the week.
Thing is, Erin's disabled. [She only has so many spoons in a day](https://en.wikipedia.org/wiki/Spoon_theory). Good luck getting everything done in time!

#### This game was created for WiNGHacks 2024. The devpost for this project can be located [here](https://devpost.com/software/the-lab-hfynjw). You can play the game [here](https://ourlabdoesnt.compare/).

## Demo
[![Watch the video](https://img.youtube.com/vi/Vdf8oLnoa0U/hqdefault.jpg)](https://youtu.be/Vdf8oLnoa0U)

Click the image to view the video.

## Tech Stack
This project was built with React, Redux, Tailwind, and Ink.js.
The game logic is defined with [Ink](https://www.inklestudios.com/ink/), a language designed for the creation of games with branching narratives.

## Code Explanation
The entire "game" is stored in [the_lab.json](https://github.com/same-difference/the-lab/blob/main/src/the_lab.json). It's read and interpreted by Ink.js, displayed with React, and held together with Redux.

The bulk of the React side of things happens in App.jsx and Scene.jsx, changing out the Elements, their content, and their classes based on the current game state. Thanks to Tailwind, the change in classes also changes the appearance of the app as well.

actions.js extracts the gameplay information from Ink, reducers.js translates that information into something more easily worked with, and index.js creates and holds the store.
actions.js also contains the fabled makeChoice() function, the workhorse of this strange engine.
Whenever the player makes a choice in the game, makeChoice() is called. Redux dispatches all the game info from that choice to <App>'s props and updates the store, passed along to <App> via main.jsx

<App> then passes all that game information along to <Scene> and the whole family tree of components.
<App> and <Scene> work together to transform the screen with Tailwind and new elements using a combination of useState() and useEffect()s.

Fun fact, one of the major bugs that had me scrounging through redux code for hours was solved by adding "choices" on [line 13 of Scene.jsx](https://github.com/same-difference/the-lab/blob/main/src/components/Scene.jsx). App.jsx didn't have this problem since it wasn't adding or removing Elements, only updating Classes.

Back to Ink really quick. The only viable way to extract information about the current state of the game is through the use of Ink's tags. Ink has its own internal variables, which are fed into their tags. actions.js reads these tags when updating the game state, reducers.js translates the tags to a redux state, which redux then translates into props for React.

So if the writing isn't quite up to par... that's why. I had to untangle the spaghetti I'd created. It was fun :D
