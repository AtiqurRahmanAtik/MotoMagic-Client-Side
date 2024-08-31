import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Componets/Home/Home";
import About from "../Componets/About/About";
import Services from "../Componets/Services/Services";
import Error_Page from "../Componets/Pages/Error_Page";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error_Page></Error_Page>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/service',
            element: <Services></Services>
        }
      ]
    },
  ]);


export default router;