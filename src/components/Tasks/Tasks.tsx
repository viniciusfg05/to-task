import styles from './Tasks.module.scss'
import { FaRegTrashAlt } from 'react-icons/fa';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
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

interface PropsAddChecked {
  addChecked: () => void
}

interface Tasks {
  id: number,
  tasks: string,
  checked: boolean,
}

export function Tasks() {
  const [newTasksText, setNewTasksText ] = useState('')

  const [checked, setChecked ] = useState(false)

  const [countBoolean, setCountBoolean ] = useState(0)

  const [ countTasks, setCountTasks ] = useState(0)

  const [newTasks, setNewTasks] = useState<Tasks[]>(tasks)

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

  const updateTask = (id: number) => {  
    setChecked(!checked);

    const taskIndex = newTasks.findIndex((task) => {
      return task.id == id;
      });


    const tempTasks = [...newTasks];

    tempTasks[taskIndex].checked = !tempTasks[taskIndex].checked;

    setNewTasks(tempTasks);
    
  };
  
  function addChecked(event: ChangeEvent<HTMLInputElement>) {
    const result = event.target.checked
    
    result === true ?  setCountBoolean(countBoolean + 1) : setCountBoolean(countBoolean - 1)

  }
  

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
                <p>Criar</p> <IoIosAddCircleOutline className={styles.IconAddNewTask}/>
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
            <strong>{countBoolean}</strong> de <p>{ countTasks }</p>
          </div>
        </div>
      </header>

        <div className={styles.containerTasksCreated}>
          {newTasks.map(task => (
            <div key={task.id} className={styles.taskList}>
              <div className={styles.task}>
                <label className={styles.checkbox}>
                    <input
                    name='inputCheckbox'
                    onChange={() => updateTask(task.id)}
                    type="checkbox"
                    onClick={(event: any) => addChecked(event)}
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