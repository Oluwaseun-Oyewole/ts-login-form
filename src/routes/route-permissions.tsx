import PermissionRequest from "./permision-request"
import React, { FunctionComponent } from "react"

export default function addPermissions(
  Element: FunctionComponent,
  requiredPermissions: Array<string> = []
) {
  // TODO: get user permissions
  const userPermissions: Array<string> = ["fake.permission"]
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
