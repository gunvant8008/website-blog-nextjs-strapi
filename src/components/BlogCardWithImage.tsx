import { IArticle } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IPropType {
  article: IArticle
}

const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="flex items-center justify-around rounded-md h-60 bg-gradient-to-r from-slate-500 to-slate-900">
      <Link href={`/article/${article.attributes.slug}`}>
        <span className="text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 after:ml-6">
          {article.attributes.title}
        </span>
      </Link>
      <Image alt="image" src="/gitbook.svg" width={140} height={140} />
    </div>
  )
}

export default BlogCardWithImage
