import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register, Feed, UserPage } from '../pages/';
import { Root, Error } from "./";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Register />
            },
            {
                path: "/feed",
                element: <Feed/>
            },
            {
                path: "/user",
                element: <UserPage />
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />
};

export default Router;
