import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useSWR from "swr"
import { Layout } from "components/Layout"
import { getAllTasksIds, getTaskData } from "lib/tasks"

const fetcher = (url) => fetch(url).then((res) => res.json())
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/detail-task/`

const Task = ({ staticTask, id }) => {
  const router = useRouter
  const { data: task, mutate } = useSWR(`${apiUrl}${id}`, fetcher, {
    fallbackData: staticTask,
  })

  useEffect(() => {
    mutate()
  }, [])

  if (router.fallback || !task) {
    return <div>Loading ...</div>
  }

  return (
    <Layout title={task.title}>
      <p className="mb-4">
        {"ID : "}
        {task.id}
      </p>
      <p className="mb-4 text-xl font-bold">{task.title}</p>
      <p className="bm-12">{task.created_at}</p>
      <Link href={"/task-page"}>
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <span>Back to Task-page</span>
        </div>
      </Link>
    </Layout>
  )
}

export default Task

export const getStaticPaths = async () => {
  const paths = await getAllTasksIds()
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const { task: staticTask } = await getTaskData(params.id)
  return {
    props: {
      id: staticTask.id,
      staticTask,
    },
    revalidate: 3,
  }
}
