import React from "react"

const Footer = () => {
  return (
    <footer className="text-gray-600 mt-12 fixed bottom-0 left-0 bg-white w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex">
          <a className="text-primary-dark">G.S.Labs</a>
          <p className="text-sm ml-1 text-gray-400">
            | @2023 G.S.Labs
            <a href="#">@G.S.Labs</a>
          </p>
        </div>
        <ul className="flex gap-x-1 ml-1">
          <li>fb</li>
          <li>tw</li>
          <li>in</li>
          <li>ln</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
