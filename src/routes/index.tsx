import DashboardView from "@/views/DashboardView";
import ErrorPage from "@/views/ErrorPage";
import LoginPage from "@/views/LoginPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardView />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
