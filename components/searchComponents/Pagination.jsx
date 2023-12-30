import Link from "next/link"
import { useState } from "react"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Pagination = ({ type }) => {
  const [currentPage, setCurrentPage] = useState(1)
  function handelPreviousPage() {
    const { push, query } = useState()
    if (currentPage > 1) {
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      push(`/search/${type}?searchTerm=${query?.searchTerm}&start=${newPage}`)
    }
  }
  function handelNextPage() {
    const newPage = currentPage + 1
    setCurrentPage(newPage)
    push(`/search/${type}?searchTerm=${query?.searchTerm}&start=${newPage}`)
  }
  function handelNewPage(newPage) {
    setCurrentPage(newPage)
  }
  return (
    <div className="py-10  w-full">
      <div className="flex items-center justify-center gap-4">
        <div
          onClick={handelPreviousPage}
          className="flex gap-2 cursor-pointer items-center hover:underline hover:text-blue-500"
        >
          <IoIosArrowBack />
          <span>Previous</span>
        </div>
        {[1, 2, 3, 4, 5].map((page) => {
          return (
            <Link
              onClick={() => handelNewPage(page)}
              href={push(
                `/search/${type}?searchTerm=${query?.searchTerm}&start=${newPage}`
              )}
              key={page}
            >
              {page}
            </Link>
          )
        })}
        <div
          onClick={handelNextPage}
          className="flex gap-2 hover:underline cursor-pointer  hover:text-blue-500 items-center"
        >
          <span>Next</span>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  )
}

export default Pagination
