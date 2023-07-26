import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
import addPermissions from "./route-permissions"
import { Routes } from "./routes"

const Home = lazy(() => import("../views/Home"))

// all home related routes
export const pageRoutes = () => {
  return [
    {
      path: Routes.home,
      element: addPermissions(Home, []),
    },

    { path: "/app", element: <Navigate to={Routes.home} replace /> },
  ] as RouteObject[]
}
