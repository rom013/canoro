import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StrictMode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Country from "./pages/country";
import Local from "./pages/local";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/pais",
      element: <Country />
    },
    {
      path: "/destino",
      element: <Local />
    },
    {
      path: "*",
      element: <h1>404 fudeu</h1>
    }
  ])

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}