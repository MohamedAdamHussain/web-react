import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "@/pages/DashboardPage";
import { LoginPage } from "@/pages/LoginPage";
import MainLayout from "@/layouts/MainLayout";
const router = createBrowserRouter([
  {path: "/login", element: <LoginPage />},
  {element: <MainLayout />, children: [
    {path: "/dashboard", element: <DashboardPage />},
  ]},
],{
  basename: "/web-react",
});
export default router;