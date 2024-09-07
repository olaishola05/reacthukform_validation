import styles from './page.module.css'
import Form from '../components/Form'
import NewForm from '@/components/NewForm'
import Register from '@/components/authentication/register'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.description_header}>Create Account</h1>
        {/* <NewForm /> */}
        <Register />
      </div>
    </main>
  )
}
