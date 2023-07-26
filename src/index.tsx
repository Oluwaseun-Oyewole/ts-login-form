import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "./index.scss"
import routes from "./routes"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider
        router={routes}
        fallbackElement={<p>Loading Fallback..</p>}
      />
    </Suspense>
  </React.StrictMode>
)
