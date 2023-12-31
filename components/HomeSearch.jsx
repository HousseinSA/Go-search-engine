import Image from "next/image"
import SearchForm from "./SearchForm"

const HomeSearch = () => {
  return (
    <div className="flex flex-col w-full items-center mt-24 ">
      <Image
        className=" lg:w-auto w-[250px] sm:max-w[500xp] sm:min-w[300px] "
        src={"/google.png"}
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
