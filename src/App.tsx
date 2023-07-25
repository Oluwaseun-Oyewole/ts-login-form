import React from "react"
// import "./styles/navigation.scss";

const App = () => {
  const name = "seun"
  return (
    <div>
      <h1>{name}</h1>
      React Typescript <br /> <h1>{process.env.name}</h1>
    </div>
  )
}

export default App
