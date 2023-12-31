import Pagination from "./Pagination"
import ResultWeb from "./searchResultsComponents/ResultWeb"

const WebSearch = ({ results, resultsInfo }) => {
  return (
    <main className="flex flex-col space-y-1 overflow-y-hidden p-4">
      {resultsInfo && (
        <span className="text-gray-600">
          {`About ${resultsInfo?.totalResults}
            results (${resultsInfo?.formattedSearchTime} seconds)`}
        </span>
      )}
      {results?.map((result, index) => (
        <ResultWeb result={result} key={index} />
      ))}
      <Pagination type={"web"} />
    </main>
  )
}

export default WebSearch
