import styles from './Tasks.module.scss'
import { FaRegTrashAlt, FaSmileWink } from 'react-icons/fa';
import { ChangeEvent, FormEvent, HTMLInputTypeAttribute, useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

export const tasks = [
  {
    id: 1,
    tasks: 'Lorem Lorem Lorem Lorem',
    checked: false,
  },
  {
    id: 2,
    tasks: 'Lorem Lorem Lorem Lorem jjjfsjjksfjkdjdfjd',
    checked: false,
  }
]

interface Tasks {
  id: number,
  tasks: string,
  checked: boolean,
}

export function Tasks() {
  const [newTasksText, setNewTasksText ] = useState('')

  const [checked, setChecked ] = useState(false)

  const [countTrue, setCountTrue ] = useState('')

  const [countFalse, setCountFalse ] = useState([])

  const [ countTasks, setCountTasks ] = useState(0)

  const [newTasks, setNewTasks] = useState<Tasks[]>(tasks)
  console.log(newTasks)

  function handleNewTasksChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTasksText(event.target.value)
  }

  function handleCreateTasksNew(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: Math.random(),
      tasks: newTasksText,
      checked: false
    }
  
    setNewTasks(result => [...result, newTask])
    setNewTasksText('')
  }

  function handleDeleteTasks(id: number) {
    const deleteTasks = newTasks.filter(task => {
      return task.id !== id
    })

    setNewTasks(deleteTasks)
  }

  const updateTask = () => {  
    setChecked(!checked);
    
  };

  const data = newTasks.map(task => task.checked)
  const dataString = data
  
  const total = dataString.find(data => data === false)
  console.log(total)

  

  function totalCountTasks() {
    useEffect(() => {
      const total = newTasks.length
      setCountTasks(total)
    }, [newTasks])
  }

  totalCountTasks()

  return (
    <>
        <header className={styles.headerInput}>
          <form onSubmit={handleCreateTasksNew} className={styles.form}>
            <textarea 
              placeholder="Adicione uma nova tarefa"
              name='task'
              onChange={handleNewTasksChange}
              value={newTasksText}
              required
            />
  
            <footer>
              <button type="submit">
                Criar <IoIosAddCircleOutline className={styles.IconAddNewTask}/>
              </button>
            </footer>
          </form>
        </header>
    
    <main className={styles.container}>
      <header className={styles.containerHeader}>
        <div className={styles.tasksCreate}>
          <strong>Tarefas Criadas</strong>
          <p>{ countTasks }</p>
        </div>

        <div className={styles.tasksDone}>
          <strong>Concluídas</strong>
          <div className={styles.tasksDoneCount}>
            <strong>2</strong> de <p>{ countTasks }</p>
          </div>
        </div>
      </header>

        <div className={styles.containerTasksCreated}>
          {newTasks.map(task => (
            <div className={styles.taskList}>
              <div className={styles.task}>
                <label className={styles.checkbox}>
                    <input
                    name='inputCheckbox'
                    onChange={updateTask}
                    type="checkbox"
                    // checked
                    />

                    <span>{task.tasks}</span>
                </label> 
            
                <button onClick={() => handleDeleteTasks(task.id)}>
                  <FaRegTrashAlt className={styles.trash}/> 
                </ button>
              </div>
            </div>
          ))}

        </div>

    </main>
    </>

  )
}