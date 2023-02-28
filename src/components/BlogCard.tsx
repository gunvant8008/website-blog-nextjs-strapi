import { IArticle } from "@/types"
import { formatDate } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"
interface IPropType {
  article: IArticle
}
const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href="#">
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
        <div className="flex items-center my-4">
          <div>
            <p className="mr-2 font-bold text-gray-600">
              By: {article.attributes.createdBy?.data?.attributes.firstname}{" "}
              {article.attributes.createdBy?.data?.attributes.lastname}{" "}
            </p>
          </div>
          <span className="text-gray-400">
            {formatDate(article.attributes.createdAt)}
          </span>
        </div>
        <div>
          {article.attributes.Body.substring(0, 200)}{" "}
          {article.attributes.Body.length > 200 ? "..." : ""}
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
