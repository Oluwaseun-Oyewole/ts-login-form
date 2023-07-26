/**In summary, the Permissions component provides a simple UI for displaying permission-related messages and
 * allows users to request access to a specific page or content.
 * It might be used as part of a larger application to manage permissions and access control. However,
 * please note that the actual functionality for granting permissions or handling access requests is not included in the provided code and would need to be implemented elsewhere in the application. */

import React, { FC, useState } from "react"
type Props = {
  permission: Array<string>
}
const Permissions: FC<Props> = () => {
  const [hasRequestedPermission, setHasRequestPermission] = useState(false)

  const onRequestAccess = () => {
    setHasRequestPermission(true)
  }

  return (
    <div className="">
      <p className="mb-4">
        {hasRequestedPermission
          ? "You have requested access to this page"
          : "You need permission to view this page"}
      </p>
      <p className="mb-4">
        {hasRequestedPermission
          ? "Contact your super admin to grant you access"
          : "Email the account owner to get access to this page."}
      </p>
      {!hasRequestedPermission && (
        <div className="flex justify-center items-center space-x-2">
          <button onClick={onRequestAccess} className="!text-sm !py-2">
            Request access
          </button>
          <button className="!text-sm !py-2 !bg-white border">
            Learn more
          </button>
        </div>
      )}
    </div>
  )
}

export default Permissions
