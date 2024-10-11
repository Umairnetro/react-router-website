import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./router/Home";
import Products from "./router/Products";
import Client from "./router/Client";
import Contact from "./router/Contact";
import NotFound from "./router/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <NotFound/>,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "reviews", element: <Client /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
