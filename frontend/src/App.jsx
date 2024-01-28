import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home"
import Signin from "./pages/signin/Signin"
import Signup from "./pages/signup/Signup"
import GeneratePrompt from "./pages/generateprompt/GeneratePrompt"
import SellPrompt from "./pages/sellprompt/SellPrompt"
import HireEngineerHome from "./pages/hire/HireEngineerHome";
import MarketPlaceHome from "./pages/marketplace/MarketPlaceHome";


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
  {
    path: "/sellprompt",
    element: <SellPrompt />,
  },
  {
    path: "/hire",
    element: <HireEngineerHome />,
  },
  {
    path: "/marketplace",
    element: <MarketPlaceHome />,
  }

])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
