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
    <div className="p-5 bg-gray-100 rounded-sm shadow-lg">
      <Link href={`/article/${article.attributes.slug}`}>
        <h1 className="text-xl font-bold text-gray-600 hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.title}
        </h1>
        <div className="flex items-center my-4">
          <div>
            <p className="mr-2 font-bold text-gray-600">
              By: {article.attributes.author}{" "}
            </p>
          </div>
          <span className="text-gray-400">
            {formatDate(article.attributes.createdAt)}
          </span>
        </div>
        <div>
          {article.attributes.body.substring(0, 200)}{" "}
          {article.attributes.body.length > 200 ? "..." : ""}
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
