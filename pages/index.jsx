import React from "react"
import Image from "next/image"
import Header from "../components/Header"
import HomeSearch from "../components/HomeSearch"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <main className="w-full">
      {/* header */}
      <Header />
      {/* body */}
      <HomeSearch />
      <Footer/>
    </main>
  )
}

export default Home
