import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Catrgory/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/news', element: <News></News> },
            { path: '/category', element: <Category></Category> },
        ]
    }
])