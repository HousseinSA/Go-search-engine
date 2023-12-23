import Image from "next/image"
import { FaGear } from "react-icons/fa6"
import {} from "react-icons"

import { CgMenuGridO } from "react-icons/cg"
import SearchForm from "./SearchForm"
import Link from "next/link"
export default function SearchPageHeader() {
  return (
    <header className="sticky p-6 w-full">
      <div className="flex w-full flex-wrap items-center justify-between gap-5">
        <div className="flex flex-1 flex-col sm:flex-row md:justify-start justify-center items-center gap-4">
          <Link href={"/"}>
            <div>
              <Image
                src={"/google.png"}
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
    </header>
  )
}
