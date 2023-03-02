import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 border-b-2 border-dashed">
      <Link className="ml-2 font-bold text-primary-dark" href="/">
        G.S.Labs
      </Link>
      <ul className="flex">
        <li className="mr-6 font-medium tracking-wide text-gray-600 hover:text-primary">
          <a href="#">PROJECTS</a>
        </li>
        <li className="mr-6 font-medium tracking-wide text-gray-600 hover:text-primary">
          <a href="#">BLOG</a>
        </li>
        <li className="mr-6 font-medium tracking-wide text-gray-600 hover:text-primary">
          <a href="#">LINKEDIN</a>
        </li>
        <li className="mr-6 font-medium tracking-wide text-gray-600 hover:text-primary">
          <a href="#">GITHUB</a>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Log in
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href="#"
            className="px-4 py-2 text-white transition-all rounded-sm bg-primary hover:bg-primary-dark"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
