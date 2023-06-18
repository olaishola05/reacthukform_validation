import styles from './page.module.css'
import Form from '../components/Form'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.description_header}>Create New Account</h1>
        <Form />
      </div>
    </main>
  )
}
