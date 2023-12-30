import Pagination from "./Pagination"
import ResultImage from "./searchResultsComponents/ResultImage"
const ImageSearch = ({ results, resultsInfo }) => {
  return (
    <main className="flex flex-col justify-center gap-2 overflow-y-hidden p-4">
      {resultsInfo && (
        <span className="text-gray-600">
          {`About ${resultsInfo?.totalResults}
            results (${resultsInfo?.formattedSearchTime} seconds)`}
        </span> 
      )}
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-2">
        {results?.map((result, index) => (
          <ResultImage result={result} key={index} />
        ))}
      </div>
      <Pagination  type={'image'}/>
    </main>
  )
}

export default ImageSearch
