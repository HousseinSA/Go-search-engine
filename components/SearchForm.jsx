import { IoCloseOutline } from "react-icons/io5"
import { IoMdSearch } from "react-icons/io"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSearchType } from "../app/utils/useSearchType"

const SearchForm = () => {
  const [loadingSearch, setLoadingSearch] = useState(false)
  const { query, push, pathname } = useRouter()
  const [search, setSearch] = useState("")

  const { searchType } = useSearchType()

  function handleSearch(e) {
    e.preventDefault()
    push(`/search/${searchType}?searchTerm=${search}`)
  }
  useEffect(() => {
    setSearch(query.searchTerm || "")
  }, [query.searchTerm])
  function handleCloseIcon() {
    setSearch("")
  }
  async function randomSearch() {
    setLoadingSearch(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word")
    const word = await response.json()
    const wordString = word[0]
    if (!word) return
    push(`/search/web?searchTerm=${wordString}`)
    setLoadingSearch(false)
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
        className={`flex ${
          !query.searchTerm ? "mt-5 max-w-[80%] mx-auto " : " md:w-[70%]"
        } w-full rounded-full p-4 border-gray-500 shadow-md transition-shadow focus-within:shadow-m`}
      >
        {!query.searchTerm && (
          <IoMdSearch
            className="text-xl text-gray-500 mr-3 cursor-pointer"
            onClick={handleSearch}
          />
        )}
        <input
          type="text"
          className="flex-grow 
            focus:outline-none border-none"
          value={search && search}
          onChange={({ target }) => setSearch(target.value)}
        />
        {search && (
          <IoCloseOutline
            onClick={handleCloseIcon}
            className="text-[1.5rem] hover:cursor-pointer text-gray-500 mr-2"
          />
        )}
        <div
          className={`flex space-x-2 items-center ${
            query.searchTerm && "border-l border-gray-50"
          } `}
        >
          <svg
            className="svprff  ml-2 hover:cursor-pointer"
            alt="Search by voice"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "1.5rem", height: "1.5rem" }}
          >
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            ></path>
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
            <path
              fill="#fbbc04"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            ></path>
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            ></path>
          </svg>
          {query.searchTerm && (
            <IoMdSearch
              className="text-xl text-gray-500 mr-3 cursor-pointer"
              onClick={handleSearch}
            />
          )}
        </div>
      </form>
      {!pathname && (
        <div className="flex flex-col mt-8 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center  ">
          <button className="btn" onClick={handleSearch}>
            Google Search
          </button>
          <button
            disabled={loadingSearch}
            className="btn disabled:opacity-80 w-full mx-auto "
            onClick={randomSearch}
          >
            {!loadingSearch ? (
              "I'm Feeling Lucky"
            ) : (
              <Image
                src={"/Rolling-1.5s-200px.svg"}
                alt="loading"
                width={20}
                height={20}
              />
            )}
          </button>
        </div>
      )}
    </>
  )
}

export default SearchForm
