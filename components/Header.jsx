'use client'
import Link from "next/link"
import { CgMenuGridO } from "react-icons/cg"

const Header = () => {
  return (
    <header className="flex w-full justify-end items-center p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link className="hover:underline" href={"https://mail.google.com"}>
          Gmail
        </Link>
        <Link className="hover:underline" href={"https://image.google.com"}>
          images
        </Link>
        <div className="hover:cursor-pointer hover:bg-gray-200 rounded-full p-2 bg-transparent">
          <CgMenuGridO className="text-2xl" />
        </div>
        <button className="bg-blue-500 text-white px-6 hover:brightness-105 hover:shadow-md transition-shadow hover:cursor-pointer py-3 rounded-md border-none font-medium ">
          Sign in
        </button>
      </div>
    </header>
  )
}

export default Header
