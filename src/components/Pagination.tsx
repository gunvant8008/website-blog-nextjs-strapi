import React from "react"
import { TDirection } from "@/types"
import qs from "qs"
import { useRouter } from "next/router"

interface IPropType {
  page: number
  pageCount: number
  redirectUrl?: string
}

const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropType) => {
  const router = useRouter()

  const isNextDisabled = (): boolean => {
    return page >= pageCount
  }
  const isPrevDisabled = (): boolean => {
    return page <= 1
  }

  const handlePaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return
    }
    if (direction === -1 && isPrevDisabled()) {
      return
    }
    const queryString = qs.stringify({
      ...router.query,
      page: page + direction
    })

    router.push(`${redirectUrl}?${queryString}`)
  }
  return (
    <div className=" flex justify-center mt-24 gap-x-4">
      <button
        className={`bg-primary py-2 px-4 text-white w-24 rounded ${
          isPrevDisabled() ? "disabled" : ""
        }`}
        onClick={() => handlePaginate(-1)}
      >
        Previous
      </button>
      <button
        className={`bg-primary py-2 px-4 text-white w-24 rounded ${
          isNextDisabled() ? "disabled" : ""
        }`}
        onClick={() => handlePaginate(1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
