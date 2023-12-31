import SearchPageHeader from "./SearchPageHeader"

const SearchLayout = ({ children }) => {
  return (
    <div>
      <SearchPageHeader />
      <section className="pt-[195px]  sm:pt-[130px]">
        {children}
      </section>
    </div>
  )
}

export default SearchLayout
