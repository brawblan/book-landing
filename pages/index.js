import React, { useState } from 'react'
import Meta from '../components/Meta'
import Author from '../components/Author'
import Book from '../components/Book'
import Subscribe from '../components/Subscribe'
import SubscribeMessage from '../components/SubscribeMessage'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [subscribed, setSubscribed] = useState(true)

  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>
          <Author />
          <div className={styles.cardFlex}>
            <Book />
            {subscribed ? 
              <Subscribe onClick={() => setSubscribed(!subscribed)} /> : 
              <SubscribeMessage onClick={() => setSubscribed(!subscribed)} />}
          </div>
        </main>
      </div>
    </>
  )
}
