import React from "react";
import { useParams } from "react-router";

const projectData = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A portfolio built with React.",
  },
  {
    id: "2",
    title: "E-commerce Landing Page",
    description: "A modern landing page design.",
  },
  {
    id: "3",
    title: "Blog Application",
    description: "A blog platform using React and JSON.",
  },
];

const ProjectDetails = () => {
  const { id } = useParams(); // Extract the dynamic parameter
  const project = projectData.find((p) => p.id === id); // Find the project by id

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
