import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signin from "./pages/signin/Signin"


const router = createBrowserRouter([
  {
    path: "",
    element: <Signin />,
  },
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
