import { createContext, useState } from "react"

export const StateContext = createContext()

export const StateContextProvider = (props) => {
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: "" })
  return (
    <StateContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}
