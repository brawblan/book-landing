import Meta from '../components/Meta'
import Author from '../components/Author'
import Book from '../components/Book'
import Subscribe from '../components/Subscribe'
import SubscribeMessage from '../components/SubscribeMessage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <main className={styles.main}>
        <Author />

        <div className={styles.cardFlex}>
          <Book />
          <Subscribe />
          {/* <SubscribeMessage /> */}
        </div>
      
      </main>
    </div>
  )
}
