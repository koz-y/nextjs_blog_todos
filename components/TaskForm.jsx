import { StateContext } from "context/StateContext"
import { useContext } from "react"
import Cookie from "universal-cookie"

const cookie = new Cookie()
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api`

export const TaskForm = ({ taskCreated }) => {
  const { selectedTask, setSelectedTask } = useContext(StateContext)

  const create = async (e) => {
    e.preventDefault()
    await fetch(`${apiUrl}/tasks/`, {
      method: "POST",
      body: JSON.stringify({ title: selectedTask.title }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT was invalid")
      }
    })
    setSelectedTask({ id: 0, title: "" })
    taskCreated()
  }

  const update = async (e) => {
    e.preventDefault()
    await fetch(`${apiUrl}/tasks/${selectedTask.id}/`, {
      method: "PUT",
      body: JSON.stringify({ title: selectedTask.title }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${cookie.get("access_token")}`,
      },
    }).then((res) => {
      if (res.status === 401) {
        alert("JWT was invalid")
      }
    })
    setSelectedTask({ id: 0, title: "" })
    taskCreated()
  }
  return (
    <div>
      <form onSubmit={selectedTask.id !== 0 ? update : create}>
        <input
          className="text-black mb-8 px-2 py-1 rounded "
          type="text"
          value={selectedTask.title}
          onChange={(e) => setSelectedTask({ ...selectedTask, title: e.target.value })}
        />
        <button
          type="submit"
          className="bg-gray-400 ml-2 hover:bg-gray-500 text-sm px-2 py-1 rounded uppercase"
        >
          {selectedTask.id !== 0 ? "update" : "create"}
        </button>
      </form>
    </div>
  )
}
