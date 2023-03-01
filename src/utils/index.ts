import { IArticle } from "@/types"
import { serialize } from "next-mdx-remote/serialize"

export const formatDate = (dateString: string) => {
  const date = new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
  return date
}

export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout
  const debounced = (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, timeout)
  }
  return debounced
}

export const serializeMarkdown = async (item: IArticle) => {
  const Body = await serialize(item.attributes.Body as string)
  return {
    ...item,
    attributes: {
      ...item.attributes,
      Body
    }
  }
}
