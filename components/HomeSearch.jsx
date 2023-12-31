import Image from "next/image"
import SearchForm from "./SearchForm"

const HomeSearch = () => {
  return (
    <div className="flex flex-col w-full items-center mt-24 ">
      <Image
        className=" w-aut0 sm:min-w-[250px] sm:max-w-[400px]"
        src={"/google.png"}
        width={250}
        priority
        alt="google image"
        height={100}
      />
      <SearchForm />
    </div>
  )
}

export default HomeSearch
