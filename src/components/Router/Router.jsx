// Importing from react-router-dom
import Banner from "../banner/Banner";
import About from "../about/About";
import Projects from "../projects/Projects";

import MainLayout from "../mainLayout/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router";

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
          <Route index element={<Banner />} />
          <Route path="about" element={<About />} />
          {/* <Route path="education" element={<Education />} /> */}
          <Route path="projects" element={<Projects />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
