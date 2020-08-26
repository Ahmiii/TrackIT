import React from "react";
import CitySummary from "./CitySummary/citySummary";
import { withStyles } from "@material-ui/core";

const ProjectList = () => {
  const projects = [
    { id: "1", title: "Karachi", content: "Sindh, Pakistan" },
    { id: "2", title: "Lahore", content: "Punjab, Pakistan" },
    { id: "3", title: "Islamabad", content: "Punjab, Pakistan" },
    { id: "4", title: "Hyderabad", content: "Sindh, Pakistan" },
    { id: "5", title: "Multan", content: "Punjab, Pakistan" },
  ];

  const clicked = () => {
    console.log("clicked");
  };
  return (
    <div>
      {projects.map((project) => {
        return (
          <CitySummary clicked={clicked} project={project} key={project.id} />
        );
      })}
    </div>
  );
};
export default ProjectList;
