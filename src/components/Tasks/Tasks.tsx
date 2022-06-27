import styles from './Tasks.module.scss'
import { FaRegTrashAlt } from 'react-icons/fa';


export function Tasks() {
  return (
    <main className={styles.container}>
      <header className={styles.containerHeader}>
        <div className={styles.tasksCreate}>
          <strong>Tarefas Criadas</strong>
          <p>5</p>
        </div>

        <div className={styles.tasksDone}>
          <strong>Concluídas</strong>
          <div className={styles.tasksDoneCount}>
            <strong>2</strong> de <p>5</p>
          </div>
        </div>
      </header>

      <div className={styles.containerTasksCreated}>
        <div className={styles.taskList}>

        <div className={styles.task}>
          <label className={styles.checkbox}>
            <input type="checkbox" />
              <span>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </span>
          </label>

            <FaRegTrashAlt className={styles.trash}/> 
          </div>

          <div className={styles.task}>
          <label className={styles.checkbox}>
            <input type="checkbox" />
              <span>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </span>
          </label>

            <FaRegTrashAlt className={styles.trash}/> 
          </div>

          <div className={styles.task}>
          <label className={styles.checkbox}>
            <input type="checkbox" />
              <span>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </span>
          </label>

            <FaRegTrashAlt className={styles.trash}/> 
          </div>
        </div>
      </div>

    </main>
  )
}