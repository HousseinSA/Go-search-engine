import { useEffect, useState } from "react"
import SearchPageComponent from "../../../components/searchPageComponent"
import { useRouter } from "next/router"
import Link from "next/link"

const WebPage = () => {
  const { query } = useRouter()
  const [results, setResults] = useState([])
  const [selectedLinks, setSelectedLinks] = useState([])
  useEffect(() => {
    async function getResults() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${query.searchTerm}`
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setResults(data.items)
        console.log(data)
      } catch (error) {
        console.error("Error fetching search results:", error.message)
      }
    }

    if (query.searchTerm) {
      getResults()
    }
  }, [query.searchTerm])

  function selectLinks(index) {
    setTimeout(() => {
      setSelectedLinks((prev) => [...prev, index])
      localStorage.setItem("selectedLinks", JSON.stringify(selectedLinks))
    }, 3000)
  }

  useEffect(() => {
    const prevSelectedLinks = localStorage.getItem("selectedLinks")
    if (prevSelectedLinks) {
      setSelectedLinks(JSON.parse(prevSelectedLinks))
    }
  }, [])
  console.log(selectedLinks)

  return (
    <>
      <SearchPageComponent />
      <main className="flex flex-col p-4 flex-grow">
        {results?.map((result, index) => (
          <div key={index} className="flex my-4 flex-col space-y-2">
            <Link href={result?.link} onClick={() => selectLinks(index)}>
              <h1 className={`${selectedLinks === index && "text-purple-800"}`}>
                {result?.title}
              </h1>
              <span className="text-sm text-gray-600">{result?.snippet}</span>
            </Link>
          </div>
        ))}
      </main>
    </>
  )
}

export default WebPage
