import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signin from "./pages/signin/Signin"
import Signup from "./pages/signup/Signup"


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
