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
                /* loader: async () => {
                    return fakeDb.from("teams").select("*")
                }, */
            },
            {
                path: "/feed",
                element: <Feed/>
                /* loader: async ({ params }) => {
                    return fetch(`/api/teams/${params.teamId}.json`)
                }, */
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