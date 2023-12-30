import React from "react"
import Header from "../components/Header"
import HomeSearch from "../components/HomeSearch"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <main className="w-full min-h-screen">
      {/* header */}
      <Header />
      {/* body */}
      <HomeSearch />
      <Footer />
    </main>
  )
}

export default Home
