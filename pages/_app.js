// _app.js
import React from "react"
import Head from "next/head"
import "../app/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Google Search</title>
        {/* Add meta tags, title, etc. that should be included in the head of every page */}
      </Head>
      {/* Wrap your app with Redux Provider if you're using Redux */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
