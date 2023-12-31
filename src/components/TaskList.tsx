import React from 'react'

// Interface
import {ITask} from "../interfaces/Task"

// CSS
import styles from "./TaskList.module.css"
import { IoTrashOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
    
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <GoPencil className='icon' onClick={() => handleEdit(task)}/>
              <IoTrashOutline className='icon' onClick={() => handleDelete(task.id)}/>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}

    </>
  )
}

export default TaskList