import React from "react"
import "./styles/navigation.scss"
import classes from "./styles/nav.module.scss"

const App = () => {
  return (
    <div>
      React Typescript <br /> <h1>{process.env.name}</h1>
      <div className="flex-parent">
        <h1 className={classes.h1}>Hey</h1>
        <h2 className="text-blue-300 font-bold text-5xl">Hi</h2>
      </div>
    </div>
  )
}

export default App
