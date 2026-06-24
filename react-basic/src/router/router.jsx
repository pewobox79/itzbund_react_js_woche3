import { createBrowserRouter } from 'react-router'
import Homepage from '../pages/Homepage'
import MainLayout from '../layouts/MainLayout'
import Errorpage from '../pages/ErrorPage'
import Userpage from '../pages/Userpage'
import SingleUserPage from '../pages/SingleUserPage'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "about",
                element: <h1>about me</h1>
            },
            {
                path: "users",
                children: [
                    {
                        index: true,
                        element: <Userpage />,
                    },
                    {
                        path: ":id",
                        element: <SingleUserPage />
                    }
                ]
            }
        ]
    },
    {
        path: "contact",
        element: <h1>contact</h1>
    }
])