/**This code defines a function named addPermissions that acts as a higher-order component (HOC) in a React application.
 * The purpose of this HOC is to add permission-based access control to a given React component by checking
 * if the current user has the required permissions to access that component.
 *  Let's break down the code step-by-step: */

/**
 *  this HOC function addPermissions checks if the current user has the r
 * equired permissions to access a given React component.
 * If the user has the required permissions,
 * it renders the component; otherwise,
 * \it renders the PermissionRequest component (which should display a message indicating insufficient access).
 */

import { FunctionComponent } from "react"
import PermissionRequest from "./permision-request"

export default function addPermissions(
  Element: FunctionComponent,
  requiredPermissions: Array<string> = []
) {
  // TODO: get user permissions
  const userPermissions: Array<string> = ["fake-permission"]
  const hasPermissions = () => {
    return requiredPermissions.join(",").includes(userPermissions.join(","))
  }
  if (requiredPermissions && requiredPermissions.length) {
    if (!hasPermissions()) {
      // TODO: return no access screen
      return <PermissionRequest permission={requiredPermissions} />
    }
  }
  return <Element />
}
