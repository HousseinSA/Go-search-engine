import SearchLayout from "../../../components/searchComponents/SearchLayout"
import { useRouter } from "next/router"
import Error from "../error"
import WebSearch from "../../../components/searchComponents/WebSearch"
import { useEffect, useState } from "react"
import Loading from "../../../components/loading"

const WebPage = ({ results, resultsInfo, error }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (results || error) {
      setLoading(false)
    }
  }, [])
  const { query } = useRouter()
  return (
    <SearchLayout>
      {loading ? (
        <Loading type={"web"} />
      ) : error ? (
        <Error />
      ) : results === undefined ? (
        <div className="flex flex-col justify-center items-center space-y-4 pt-14">
          <h1 className="text-3xl">
            could not find results for {query.searchTerm}
          </h1>
        </div>
      ) : (
        <WebSearch results={results} resultsInfo={resultsInfo} />
      )}
    </SearchLayout>
  )
}
export async function getServerSideProps(context) {
  const { query } = context
  const start = query?.start ? parseFloat(query.start) : 1
  try {
    if (!query.searchTerm) {
      return {
        props: {
          error: "Query parameter 'searchTerm' is missing",
        },
      }
    }

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${query.searchTerm}&start=${start}`
    )
    if (!response.ok) {
      console.log(response)
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    return {
      props: {
        results: data?.items || [],
        resultsInfo: data?.searchInformation || {},
        error: null,
      },
    }
  } catch (error) {
    return {
      props: {
        error: error.message || "An error occurred while fetching data",
      },
    }
  }
}

export default WebPage
