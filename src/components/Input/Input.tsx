import styles from './Input.module.scss'
import { IoIosAddCircleOutline } from 'react-icons/io';

export function Input() {
  return (
    <form className={styles.form}>
      <input 
        placeholder="Adicione uma nova tarefa"
        name='task'
        required
      />

      <footer>
        <button>
          Criar <IoIosAddCircleOutline className={styles.IconAddNewTask}/>
        </button>
      </footer>
    </form>
  )
}