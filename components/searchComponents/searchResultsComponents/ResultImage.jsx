import Image from "next/image"
import Link from "next/link"
import Parser from "html-react-parser"
const ResultImage = ({ result }) => {
  return (
    <div className="flex w-full flex-col justify-center items-center space-y-2 p-2 hover:shadow-md transition-shadow">
      <Link
        href={result?.link}
        className="flex justify-center w-full items-center flex-col space-y-3  "
      >
        <Image
          src={result?.image?.thumbnailLink}
          width={200}
          height={200}
          alt={result.title}
          priority
          className="rounded-md object-cover px-12 w-[400px] sm:px-0 sm:w-[200px] sm:h-[200px]"
        />
      </Link>
      <Link
        href={result?.image?.contextLink}
        className="flex flex-col space-y-2 justify-center"
      >
        <span className="text-xl hover:underline">{result?.displayLink}</span>
        <span className="hover:underline text-gray-500">
          {Parser(result?.htmlSnippet)}
        </span>
      </Link>
    </div>
  )
}

export default ResultImage
