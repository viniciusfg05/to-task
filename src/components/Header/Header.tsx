import styles from './Header.module.scss'

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.content}>
        <img src="./rocket.svg" />
        
        <div className={styles.logo}>
          <p>to</p><strong>tasks</strong>
        </div>
      </div>
    </header>
  )
}