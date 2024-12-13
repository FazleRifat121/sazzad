// Importing from react-router-dom
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../home/Home";
import Projects from "../projects/Projects";
import ProjectDetails from "../projects/ProjectDetails";
import Skill from "../skill/Skill";
import Education from "../education/Education";
import Achievement from "../achievement/Achievement";
import Experience from "../experience/Experience";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="skill" element={<Skill />} />
          <Route path="projects" element={<Projects />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="exp" element={<Experience />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
