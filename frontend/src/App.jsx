import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home"
import Signin from "./pages/signin/Signin"
import Signup from "./pages/signup/Signup"
import GeneratePrompt from "./pages/generateprompt/GeneratePrompt"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/generateprompt",
    element: <GeneratePrompt />,
  },
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
