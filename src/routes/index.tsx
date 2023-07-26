import { Navigate, createBrowserRouter } from "react-router-dom"
import { isAuthenticated, isUnAuthenticated } from "../helper"
import AuthLayout from "../layout/auth-layout"
import PagesLayout from "../layout/pages-layout"
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
      <RouteProtection redirect={Routes.home} validations={[isUnAuthenticated]}>
        <AuthLayout />
      </RouteProtection>
    ),
    children: [...authenticationRoutes()],
  },
  {
    path: "/app",
    element: (
      <RouteProtection redirect={Routes.login} validations={[isAuthenticated]}>
        <PagesLayout />
      </RouteProtection>
    ),
    children: [...pageRoutes()],
  },
])

export default routes
