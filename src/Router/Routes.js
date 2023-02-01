import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddStudents from "../pages/AddStudents/AddStudents";
import ManageStudents from "../pages/ManageStudents/ManageStudents";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/addStudents',
                element: <AddStudents />
            },
            {
                path: '/manageStudents',
                element: <ManageStudents />
            }
        ]
    }
])