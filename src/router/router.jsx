import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ChefRecipe from "../ShearPage/ChefRecipe";
import About from "../Page/About/About";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
            }
            ,
            {
                path: 'chef/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/restaurants/${params.id}`)
            }
        ]
    }
])
export default router;