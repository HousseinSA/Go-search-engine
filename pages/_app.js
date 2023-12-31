// _app.js
import React from "react"
import Head from "next/head"
import "../app/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Google Search</title>
        <link
          rel="icon"
          href="/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg"
        />
        <meta name="Go-engine" content="Go-engine is i google search clone " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add meta tags, title, etc. that should be included in the head of every page */}
      </Head>
      {/* Wrap your app with Redux Provider if you're using Redux */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
