import { Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";

export const adminRoutes = [
  // Unprotected login route
  <Route path="/admin/login" element={<Login />} key="admin-login" />,

  // Protected admin routes using RequireAuth inside layout
  <Route path="/admin" element={<AdminLayout />} key="admin-layout">
    <Route index element={<Dashboard />} />
    <Route path="blogs" element={<Blogs />} />
  </Route>,
];
