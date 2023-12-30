import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const useSearchType = () => {
  const { query } = useRouter()
  const [searchType, setSearchType] = useState("web")
  console.log(searchType)
  return { searchType, setSearchType }
}

export default useSearchType
