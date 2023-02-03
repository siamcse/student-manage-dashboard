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
                path: '/view',
                element: <PrivateRoutes><ViewPage /></PrivateRoutes>
            },
            {
                path: '/edit',
                element: <PrivateRoutes><EditPage /></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])