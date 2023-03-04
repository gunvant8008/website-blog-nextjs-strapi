import Link from "next/link"
import React from "react"

const ProjectCard = () => {
  return (
    <div className="p-5 bg-gray-100 rounded-sm shadow-lg">
      <Link href="#">
        <h1 className="text-xl font-bold text-gray-600 hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          Project title
        </h1>
        <div className="flex items-center my-4">
          <div>
            <p className="mr-2 font-bold text-gray-600">author</p>
          </div>
          <span className="text-gray-400">date</span>
        </div>
        <div>details</div>
      </Link>
    </div>
  )
}

export default ProjectCard
