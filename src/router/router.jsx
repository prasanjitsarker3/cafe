import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ChefRecipe from "../ShearPage/ChefRecipe";
import About from "../Page/About/About";

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