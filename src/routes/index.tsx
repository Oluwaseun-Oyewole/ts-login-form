import React from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"
import PagesLayout from "../layout/pages-layout"
import AuthLayout from "../layout/auth-layout"
import ErrorPage from "../views/error"
import { authenticationRoutes } from "./auth-routes"
import { pageRoutes } from "./page-routes"
import RouteProtection from "./route-protection"
import { Routes } from "./routes"

const routes = createBrowserRouter([
  {
    path: Routes.base,
    // element: <Landing />,
    element: <Navigate to={Routes.auth} replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: (
      <RouteProtection redirect={Routes.home} validations={[]}>
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authenticationRoutes()],
  },
  {
    path: "/app",
    element: (
      <RouteProtection redirect={Routes.login} validations={[]}>
        <PagesLayout />
      </RouteProtection>
    ),
    children: [...pageRoutes()],
  },
])

export default routes
