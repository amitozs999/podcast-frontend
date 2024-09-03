import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Home from "../components/Home/Home";
import Preloader from "../components/Preloader/Preloader";
import Home2 from "../components/Home/Home2";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import VerifyMail from "../components/VerifyMail/VerifyMail";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import RootLayout from "../components/RootLayout/RootLayout";

const router = createBrowserRouter([
  {
    element: (
      // <Suspense fallback={<Preloader />}>
      <RootLayout />
      // </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home2 />,
      },
    ],
  },

  {
    // element: (
    //   <Suspense fallback={<Preloader />}>
    //     <RootLayoutFive />
    //     <ScrollRestoration />
    //   </Suspense>
    // ),

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/verify-mail",
        element: <VerifyMail />,
      },
    ],
  },
]);

export default router;
