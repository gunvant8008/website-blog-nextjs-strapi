import { ICategory } from "@/types"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import searchSvg from "public/search.svg"

interface IPropType {
  categories: ICategory[]
  handleOnSearch: (query: string) => void
}

const Tabs = ({ categories, handleOnSearch }: IPropType) => {
  const router = useRouter()

  const isActiveLink = (category: ICategory) => {
    return category.attributes.slug === router.query.category
  }

  return (
    <div className="flex flex-col items-center justify-between my-8 font-bold text-gray-400 border-b-2 border-gray-100 md:flex-row">
      <ul className="flex gap-x-5">
        <li
          className={
            `border-b-2 rounded-sm mr-0 pb-1 ` +
            `${
              router.pathname === "/"
                ? "border-primary text-primary"
                : "border-white text-gray-400"
            }`
          }
        >
          <Link href="/">Recent</Link>
        </li>
        {categories.map(category => {
          return (
            <li
              key={category.id}
              className={
                `border-b-2 rounded-sm mr-0 pb-1 ` +
                `${
                  isActiveLink(category)
                    ? "border-primary text-primary"
                    : "border-white text-gray-400"
                }`
              }
            >
              <Link href={`/category/${category.attributes.slug}`}>
                {category.attributes.title}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          placeholder="Search"
          className="w-[300px] px-2 py-1 ml-1 outline-dashed outline-1"
          onChange={e => handleOnSearch(e.target.value)}
        />
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            fill="#323232"
          />
          <path
            d="M17 17L21 21"
            stroke="#323232"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#323232"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

export default Tabs
