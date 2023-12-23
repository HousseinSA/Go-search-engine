import { useEffect, useState } from "react"

export const useSearchType = () => {
  const [searchType, setSearchType] = useState("web")

  useEffect(() => {
    const storedSearchType = localStorage.getItem("searchType")
    if (storedSearchType) {
      setSearchType(storedSearchType)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("searchType", searchType)
  }, [searchType])

  return { searchType, setSearchType }
}
