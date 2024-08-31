import styles from './page.module.css'
import Form from '../components/Form'
import NewForm from '@/components/NewForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.description_header}>Create New Account</h1>
        <NewForm />
      </div>
    </main>
  )
}
