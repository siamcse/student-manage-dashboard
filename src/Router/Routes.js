import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddStudents from "../pages/AddStudents/AddStudents";
import EditPage from "../pages/EditPage/EditPage";
import Login from "../pages/Login/Login";
import ManageStudents from "../pages/ManageStudents/ManageStudents";
import SignUp from "../pages/SignUp/SignUp";
import ViewPage from "../pages/ViewPage/ViewPage";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/addStudents',
                element: <PrivateRoutes><AddStudents /></PrivateRoutes>
            },
            {
                path: '/manageStudents',
                element: <PrivateRoutes><ManageStudents /></PrivateRoutes>
            },
            {
                path: '/view/:id',
                element: <PrivateRoutes><ViewPage /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://student-manage-server-siamcse.vercel.app/students/${params.id}`)
            },
            {
                path: '/edit/:id',
                element: <PrivateRoutes><EditPage /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://student-manage-server-siamcse.vercel.app/students/${params.id}`)
            },
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])