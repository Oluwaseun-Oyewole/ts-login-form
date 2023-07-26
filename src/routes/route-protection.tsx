// In summary, this component is a utility to protect certain
//  routes by checking a set of validations.
// If the validations pass, it will render the content; otherwise, it will redirect the user to the specified path. The replace prop can be used to control
// how the navigation entry is added to the history stack.

import React from "react"
import { Navigate } from "react-router-dom"

export type RouteProtectionProps = {
  // children (required): A JSX element representing the content to be rendered if the validations are successful.
  children: JSX.Element

  // redirect (required): A string representing the path to redirect to if the validations fail
  redirect: string

  // replace (optional): A boolean indicating whether to replace the current entry in the history stack or add a new one. If replace is not provided or true, the current entry will be replaced.
  replace?: boolean
  /**
   * if all a true then it's a valid route and content would be
   * rendered but if any of the array item returns false then path would be redirected
   */
  validations: Array<boolean | (() => boolean)>
  /**
   * called when  validations return false;
   */

  // onInValid (optional): A callback function called when any of the validations return false
  onInValid?: () => void
}

function RouteProtection({
  children,
  redirect,
  validations,
  replace,
  onInValid,
}: RouteProtectionProps) {
  const canReplace = typeof replace === "undefined" || replace

  /**RouteProtection Function Component:
The RouteProtection function component takes in the defined RouteProtectionProps as its props.

Checking Validations:
Inside the component, it first checks whether the validations array is not empty and if any of the validations return false. It does this by using the every array method along with a conditional check to execute functions if they are present. If any validation returns false, the component proceeds with the redirection.

Redirection:
If the validations fail, the RouteProtection component will call the onInValid callback function (if provided) and then return a Navigate component from React Router to redirect the user to the specified redirect path.

Rendering Children:
If all validations pass, the RouteProtection component will render the children JSX element, which represents the content that should be displayed for the protected route. */

  if (
    validations.length &&
    !validations.every((value) => {
      if (typeof value === "function") {
        return value()
      }
      return value
    })
  ) {
    if (onInValid) {
      onInValid()
    }
    return <Navigate to={redirect} replace={canReplace} />
  }

  return children
}

export default RouteProtection
