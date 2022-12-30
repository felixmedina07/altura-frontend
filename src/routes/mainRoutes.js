import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("../page/Login"));
const Error404 = lazy(() => import("../page/Error404"));
const Dashboard = lazy(() => import("../page/Dashboard"));

const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
  )
};

export default MainRoutes;
