import SearchPageHeader from "./SearchPageHeader"

const SearchLayout = ({ children }) => {
  return (
    <div>
      <SearchPageHeader />
      <section className="mt-[195px]  sm:mt-[130px]">
        {children}
      </section>
    </div>
  )
}

export default SearchLayout
