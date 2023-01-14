import Head from "next/head"
import React from "react"

export const Layout = ({ children, title = "Default title" }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-300 text-sm">
        @Udemy 2021
      </footer>
    </div>
  )
}
