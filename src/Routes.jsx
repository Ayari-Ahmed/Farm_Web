import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopTwentyTwo = React.lazy(() => import("pages/DesktopTwentyTwo"));
const DesktopTwentyFive = React.lazy(() => import("pages/DesktopTwentyFive"));
const DesktopTwentyFour = React.lazy(() => import("pages/DesktopTwentyFour"));
const DesktopEighteen = React.lazy(() => import("pages/DesktopEighteen"));
const DesktopTwentyThree = React.lazy(() => import("pages/DesktopTwentyThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktoptwentythree" element={<DesktopTwentyThree />} />
          <Route path="/desktopeighteen" element={<DesktopEighteen />} />
          <Route path="/desktoptwentyfour" element={<DesktopTwentyFour />} />
          <Route path="/desktoptwentyfive" element={<DesktopTwentyFive />} />
          <Route path="/desktoptwentytwo" element={<DesktopTwentyTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
