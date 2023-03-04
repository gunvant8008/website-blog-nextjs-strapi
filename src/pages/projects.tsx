import ProjectCard from "@/components/ProjectCard"
import React from "react"

const projects = () => {
  return (
    <div className="grid grid-cols-1 gap-16 mt-16 lg:grid-cols-2 ">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default projects
