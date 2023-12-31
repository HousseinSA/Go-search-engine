import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Pagination = ({ type }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { push, query } = useRouter()
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage")
    if (storedPage) {
      setCurrentPage(storedPage)
    } else {
      setCurrentPage(1)
    }
  }, [])
  function handelPreviousPage() {
    if (currentPage > 10) {
      const newPage = currentPage - 10
      setCurrentPage(newPage)
      push(`/search/${type}?searchTerm=${query?.searchTerm}&start=${newPage}`)
      localStorage.setItem("currentPage", newPage)
    }
    setCurrentPage(1)
    push(`/search/${type}?searchTerm=${query?.searchTerm}&start=${1}`)
  }

  function handelNextPage() {
    const newPage = currentPage + 10
    setCurrentPage(newPage)
    push(`/search/${type}?searchTerm=${query?.searchTerm}&start=${newPage}`)
    localStorage.setItem("currentPage", newPage)
  }
  function handelNewPage(page) {
    const newPage = page
    setCurrentPage(newPage)
    localStorage.setItem("currentPage", newPage)
  }

  return (
    <div className="py-10  w-full">
      <div className="flex items-center text-gray-500 justify-center gap-4">
        {currentPage >= 10 && (
          <div
            onClick={handelPreviousPage}
            className="flex gap-2 cursor-pointer items-center hover:underline hover:text-blue-500"
          >
            <IoIosArrowBack />
            <span>Previous</span>
          </div>
        )}
        {[1, 2, 3, 4, 5].map((page) => {
          return (
            <Link
              onClick={() => handelNewPage(page * 10)}
              href={`/search/${type}?searchTerm=${query?.searchTerm}&start=${
                page * 10
              }`}
              key={page * 10}
              className={`${
                currentPage === page * 10
                  ? "text-blue-500 underline"
                  : "text-gray-500"
              } hover:underline hover:text-blue-500 cursor-pointer `}
            >
              {page}
            </Link>
          )
        })}
        {currentPage <= 80 && (
          <div
            onClick={handelNextPage}
            className="flex gap-2 hover:underline cursor-pointer  hover:text-blue-500 items-center"
          >
            <span>Next</span>
            <IoIosArrowForward />
          </div>
        )}
      </div>
    </div>
  )
}

export default Pagination
