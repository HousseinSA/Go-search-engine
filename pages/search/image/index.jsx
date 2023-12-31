import SearchLayout from "../../../components/searchComponents/SearchLayout"
import { useRouter } from "next/router"
import Error from "../error"
import ImageSearch from "../../../components/searchComponents/imageSearch"
import { useEffect, useState } from "react"
import Loading from "../../../components/loading"

const ImagePage = ({ results, resultsInfo, error }) => {
  const { query } = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (results || error) {
      setLoading(false)
    }
  }, [])

  return (
    <SearchLayout>
      {loading ? (
        <Loading type={"image"} />
      ) : error ? (
        <Error />
      ) : results === undefined ? (
        <div className="flex flex-col justify-center items-center space-y-4 pt-14">
          <h1 className="text-3xl">
            could not find results for {query.searchTerm}
          </h1>
        </div>
      ) : (
        <ImageSearch results={results} resultsInfo={resultsInfo} />
      )}
    </SearchLayout>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const start = query?.start ? parseFloat(query.start) : 1
  try {
    if (!query.searchTerm) {
      // Handle the case where searchTerm is undefined
      return {
        props: {
          error: "Query parameter 'searchTerm' is missing",
        },
      }
    }
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${query.searchTerm}&searchType=image&start${start}`
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

export default ImagePage
