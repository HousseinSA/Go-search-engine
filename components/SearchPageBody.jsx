import { IoIosSearch } from "react-icons/io"
import { CiCamera } from "react-icons/ci"
import { useRouter } from "next/router"
import { useSearchType } from "../app/utils/useSearchType"

const TabsComponent = () => {
  const { setSearchType } = useSearchType()
  const { push, query, pathname } = useRouter()
 
  function activeTab(tab) {
    setSearchType(tab)
    push(`/search/${tab}?searchTerm=${query.searchTerm}`)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex border-b sticky items-center gap-4">
        <div
          className={`flex h-[2rem] ml-[24px] md:ml-[12rem] cursor-pointer  text-sm gap-1 items-center ${
            pathname === "/search/web"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => activeTab("web")}
        >
          <IoIosSearch />
          <p>All</p>
        </div>
        <div
          className={`flex h-[2rem] cursor-pointer  text-sm gap-1 items-center ${
            pathname === "/search/image"
              ? "text-blue-500  border-b-2  border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => activeTab("image")}
        >
          <CiCamera />
          <p>Images</p>
        </div>
      </div>
    </div>
  )
}

export default TabsComponent
