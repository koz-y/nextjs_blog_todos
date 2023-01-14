export const getAllTasksData = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/list-task/`)
  )
  const tasks = await res.json()
  const staticFilterdTasks = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )
  return staticFilterdTasks
}

export const getAllTasksIds = async () => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/list-task/`)
  )
  const tasks = await res.json()
  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    }
  })
}

export const getTaskData = async (id) => {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/detail-task/${id}`)
  )
  const task = await res.json()
  return {
    task,
  }
}
