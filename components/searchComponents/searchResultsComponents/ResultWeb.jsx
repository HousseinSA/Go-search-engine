import { useState, useEffect } from "react"
import Link from "next/link"
import Parser from "html-react-parser"
const ResultWeb = ({ result }) => {
  const [visitedLinks, setVisitedLinks] = useState([])

  useEffect(() => {
    // Retrieve visited links from local storage on component mount
    const storedVisitedLinks = localStorage.getItem("visitedLinks")
    if (storedVisitedLinks) {
      setVisitedLinks(JSON.parse(storedVisitedLinks))
    }
  }, [])

  const handleLinkClick = () => {
    // Add the clicked link to the visitedLinks array
    const updatedVisitedLinks = [...visitedLinks, result?.link]
    setVisitedLinks(updatedVisitedLinks)
    // Store updated visited links in local storage
    localStorage.setItem("visitedLinks", JSON.stringify(updatedVisitedLinks))
  }

  const isVisited = visitedLinks.includes(result?.link)

  return (
    <Link href={result?.link}>
      <h1
        className={`text-lg ${
          isVisited ? "text-purple-800 visited" : "text-blue-800"
        }  hover:underline`}
        onClick={handleLinkClick}
      >
        {result?.title}
      </h1>
      <span className="text-sm text-gray-600">
        {Parser(result?.htmlSnippet)}
      </span>
    </Link>
  )
}

export default ResultWeb
