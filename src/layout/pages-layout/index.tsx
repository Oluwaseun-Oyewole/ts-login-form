import { Outlet } from "react-router-dom"

const PagesLayout = () => {
  return (
    <div>
      <h1>Page Layout</h1>
      <Outlet />
    </div>
  )
}

export default PagesLayout
