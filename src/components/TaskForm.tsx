import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

// CSS
import styles from "./TaskForm.module.css"

// Interface
import { ITask } from "../interfaces/Task"

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> //esta tipagem diz que estou recebendo o set de um useState.
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //add tasks
    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = {id, title, difficulty}
    setTaskList!([...taskList, newTask])

    //form values
    setTitle("")
    setDifficulty(0)

    console.log(taskList)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    if(e.target.name === "title"){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
        <div className={styles.input_container}>
            <label htmlFor='title'>Título:</label>
            <input type="text" name='title' placeholder='Título da tarefa' value={title} onChange={handleChange}/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor='difficulty'>Dificuldade:</label>
            <input type="text" name='difficulty' placeholder='Dificuldade da tarefa' value={difficulty} onChange={handleChange}/>
        </  div>
        <input type="submit" value={btnText}/>
    </form>
  )
}

export default TaskForm