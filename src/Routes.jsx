import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Login = React.lazy(() => import("pages/Login"));
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
