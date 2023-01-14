import Link from "next/link"
import React from "react"

export const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className=" cursor-pointer text-white border-b border-gray-400 hover:bg-gray-500">
          {post.title}
        </span>
      </Link>
    </div>
  )
}
