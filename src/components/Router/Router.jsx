// Importing from react-router-dom

import Projects from "../projects/Projects";

import MainLayout from "../mainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../home/Home";

function Router() {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrapping all routes in BrowserRouter */}
      <Routes>
        {" "}
        {/* Wrapping all the Route definitions */}
        <Route path="/" element={<MainLayout />}>
          {" "}
          {/* Main Layout */}
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="education" element={<Education />} /> */}
          <Route path="projects" element={<Projects />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
