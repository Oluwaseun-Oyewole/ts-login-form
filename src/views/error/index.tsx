import { useRouteError } from "react-router-dom"

//TODO: Make a proper error page

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

export default function ErrorPage() {
  const error = useRouteError() as any
  //   console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
