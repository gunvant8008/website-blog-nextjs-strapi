import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const Navbar = () => {
  const router = useRouter()
  const navLinks: any = [
    { id: 1, link: "LINKEDIN", href: "#" },
    { id: 2, link: "GITHUB", href: "#" }
  ]
  return (
    <nav className="flex items-center justify-between py-6 border-b-2 border-dashed">
      <Link className="ml-2 text-3xl font-bold text-primary-dark" href="/">
        G.S.Labs
      </Link>
      <ul className="flex">
        <li
          className={
            `mr-6 font-medium tracking-wide text-gray-600 hover:text-primary border-b-2 rounded-sm pb-1 ` +
            `${
              router.pathname === "/"
                ? "border-primary text-primary"
                : "border-white text-gray-400"
            }`
          }
        >
          <Link href="/">BLOG</Link>
        </li>
        <li
          className={
            `mr-6 font-medium tracking-wide text-gray-600 hover:text-primary border-b-2 rounded-sm pb-1 ` +
            `${
              router.pathname === "/projects"
                ? "border-primary text-primary"
                : "border-white text-gray-400"
            }`
          }
        >
          <Link href="/projects">PROJECTS</Link>
        </li>
        {navLinks.map((link: any) => (
          <li
            className="mr-6 font-medium tracking-wide text-gray-600 hover:text-primary"
            key={link.id}
          >
            <Link href={link.href}>{link.link}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <Link href="#" className="hover:text-gray-400">
            Log in
          </Link>
        </li>
        <li className="font-medium text-gray-600">
          <Link
            href="#"
            className="px-4 py-2 text-white transition-all rounded-sm bg-primary hover:bg-primary-dark"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
