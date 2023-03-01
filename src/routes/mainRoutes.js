import { Suspense, lazy, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "../context/mainContext";

const Login = lazy(() => import("../page/Login"));
const Error404 = lazy(() => import("../page/Error404"));
const Dashboard = lazy(() => import("../page/Dashboard"));
const LaunchForces = lazy(() => import("../page/LaunchForces"));
const Vanity = lazy(() => import("../page/Vanity"));
const Marketplace = lazy(() => import("../page/Marketplace"));
const DeckBuilder = lazy(() => import("../page/DeckBuilder"));
const VerifyCode = lazy(() => import("../page/verifyCode"));
const LearnMore = lazy(() => import("../page/LearnMore"));
const ResetPassword = lazy(() => import("../page/ResetPassword"));

const MainRoutes = () => {
  const { setToken, setUser, setIsLogged } = useContext(UserContext);

  const getUserData = async () => {
    const Token = await sessionStorage.getItem("Token");
    const User = await sessionStorage.getItem("User");
    setToken(Token);
    setUser(JSON.parse(User));
    if (Token && User) {
      setIsLogged(true);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="launch-forces" element={<LaunchForces />} />
          <Route path="vanity" element={<Vanity />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="*" element={<Error404 />} />
          <Route path="deck-builder" element={<DeckBuilder />} />
          <Route path="verifyCode" element={<VerifyCode />} />
          <Route path="learn-more" element={<LearnMore />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRoutes;
