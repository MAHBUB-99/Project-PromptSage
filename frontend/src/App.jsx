import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import GeneratePrompt from "./pages/generateprompt/GeneratePrompt";
import SellPrompt from "./pages/sellprompt/SellPrompt";
import AdminApproval from "./pages/admin/admin-appoval-prompts/AdminApproval";
import HireEngineerHome from "./pages/hire/HireEngineerHome";
import MarketPlaceHome from "./pages/marketplace/MarketPlaceHome";
import Notifications from "./pages/notifications/Notifications";
import PromptDetails from "./pages/promptdetails/PromptDetails";
import Cart from "./pages/payment/Cart";
import Payment from "./pages/payment/Payment";
import PaymentSuccessful from "./pages/payment/PaymentSuccesful";
import ViewPaymentHistory from "./pages/payment/ViewPaymentHistory";
import AdminViewTransactionHistory from "./pages/admin/admin-transaction-history/AdminViewTransactionHistory";
import EditPrompt from "./pages/editprompt/EditPrompt";
import UserProfile from "./pages/profile/UserProfile";
import EngineerProfile from "./pages/profile/EngineerProfile";
import Discussion from "./pages/discussion/Discussion";
import BoughtPromptDetails from "./pages/promptdetails/BoughtPromptDetails";

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
    path: "/generate",
    element: <GeneratePrompt />,
  },
  {
    path: "/sellprompt",
    element: <SellPrompt />,
  },
  {
    path: "/admin-approval",
    element: <AdminApproval />,

  },
  {
    path: "/hire",
    element: <HireEngineerHome />,
  },
  {
    path: "/marketplace",
    element: <MarketPlaceHome />,
  },
  {
    path: "/marketplace/:id",
    element: <PromptDetails />,
  },
  {
    path: "/bought-prompt/:id",
    element: <BoughtPromptDetails />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/buy-prompt/:id",
    element: <Payment />,
  },
  {
    path: "/payment-successful",
    element: <PaymentSuccessful />,
  },
  {
    path: "/payment-history",
    element: <ViewPaymentHistory />,
  },
  {
    path: "/admin-transaction-history",
    element: <AdminViewTransactionHistory />,
  },
  {
    path: "/edit-prompt/:id",
    element: <EditPrompt />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/engineer-profile",
    element: <EngineerProfile />,
  },
  {
    path: "/discussion",
    element: <Discussion />,
  },

]);

function App() {
  return (
    <RouterProvider router={router}>
      <Toaster />
    </RouterProvider>
  );
}

export default App;
