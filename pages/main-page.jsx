import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Cookie from "universal-cookie"
import { Layout } from "../components/Layout"

const cookie = new Cookie()

const Main = () => {
  const router = useRouter()
  const logout = () => {
    const options = { path: "/" }
    cookie.remove("access_token", options)
    router.push("/")
  }
  return (
    <Layout title="Main page">
      <div className="mb-10">
        <Link
          href="/blog-page"
          className="mr-8 rounded bg-indigo-500 px-4 py-12 text-white hover:bg-indigo-600"
        >
          Visit Blog by SSG + ISR
        </Link>
        <Link
          href="/task-page"
          className="ml-8 rounded bg-gray-400 px-4 py-12 text-white hover:bg-gray-500"
        >
          Visit Task by ISR + CSR
        </Link>
      </div>
      <svg
        onClick={logout}
        className=" mt-10 cursor-pointer w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </Layout>
  )
}

export default Main
