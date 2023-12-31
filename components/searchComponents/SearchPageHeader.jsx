import Image from "next/image"
import { FaGear } from "react-icons/fa6"
import { IoMdSearch } from "react-icons/io"
import { CiCamera } from "react-icons/ci"
import { CgMenuGridO } from "react-icons/cg"
import SearchForm from "../SearchForm"
import Link from "next/link"
import { useRouter } from "next/router"
export default function SearchPageHeader() {
  const { push, query, pathname } = useRouter()
  function activeTab(tab) {
    push(`/search/${tab}?searchTerm=${query.searchTerm}`)
  }
  return (
    <header className="flex flex-col fixed top-0 left-0 right-0 w-full bg-white z-10 ">
      <div className="flex w-full flex-wrap p-6 items-center justify-between gap-5">
        <div className="flex flex-1 flex-col sm:flex-row md:justify-start justify-center items-center gap-4">
          <Link href={"/"}>
            <div>
              <Image
                className=" max-w-[150px] min-h-10"
                src={"/google.png"}
                priority
                width={150}
                height={50}
                alt="google-logo"
              />
            </div>
          </Link>
          <SearchForm />
        </div>
        <div className=" items-center gap-4 hidden md:flex ">
          <FaGear className="text-xl" />
          <CgMenuGridO className="text-2xl" />
          <button className="bg-blue-500 text-white px-6 hover:brightness-105 hover:shadow-md transition-shadow hover:cursor-pointer py-3 rounded-md border-none font-medium">
            Sign in
          </button>
        </div>
      </div>

      <div className="flex border-b items-center gap-4">
        <div
          className={`flex h-[2rem] ml-[24px]  cursor-pointer  text-sm gap-1 items-center ${
            pathname === "/search/web"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => activeTab("web")}
        >
          <IoMdSearch />
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
    </header>
  )
}
