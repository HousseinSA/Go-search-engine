import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import SearchForm from "./SearchForm"

const HomeSearch = () => {
  const { push } = useRouter()

  

  return (
    <div className="flex flex-col w-full items-center mt-24 ">
      <Image
        className="w-auto"
        src={"/Google_2015_logo.svg.png"}
        width={300}
        priority
        alt="google image"
        height={100}
      />
      <SearchForm />
    </div>
  )
}

export default HomeSearch
