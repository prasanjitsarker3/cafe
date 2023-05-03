import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ChefRecipe from "../ShearPage/ChefRecipe";
import About from "../Page/About/About";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../Page/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            ,
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/restaurants/${params.id}`)
            }
        ]
    }
])
export default router;