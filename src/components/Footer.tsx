import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full mt-12 text-gray-600 bg-white">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex">
          <Link href="#" className="text-primary-dark">
            G.S.Labs
          </Link>
          <p className="ml-1 text-sm text-gray-400">
            | @2023 G.S.Labs
            <Link href="#">@G.S.Labs</Link>
          </p>
        </div>
        <ul className="flex ml-1 gap-x-1">
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
