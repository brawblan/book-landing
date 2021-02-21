import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Book.module.css'

const Book = () => {
  const [instaCam, setInstaCam] = useState("/instagram_white.svg")

  return (
    <div className={styles.card}>
      <div className={styles.bookImg}>
        <Image
          src="/book_cover.svg"
          alt="The Last Hacker Book Cover"
          layout='fixed'
          width={130}
          height={182}
        />
      </div>
      <div className={styles.bookDescription}>
        <h1>THE LAST HACKER</h1>
        <p>
          In this book, you'll explore a story of a future that we can only hope will never be and possibilities that blur the lines between fiction and reality.
        </p>
        <p>
          My name is Mark Wahlbeck, and welcome to the World of Wahlbeck!
        </p>
        <div className={styles.btns}>
          <a href="https://www.kickstarter.com/" target="_blank">
            <button className={`${styles.kickstart} ${styles.btn}`}>
              GET ON KICKSTARTER
            </button>
          </a>
          <button 
            onMouseOver={() => setInstaCam("/instagram_grad.svg")} 
            onMouseOut={() => setInstaCam("/instagram_white.svg")} 
            className={`${styles.instaBtn} ${styles.btn}`}
          >
            <a href="https://www.instagram.com/" target="_blank">
              <Image
                src={instaCam}
                prefetch={false}
                alt="Instagram logo"
                layout="fixed"
                width={20}
                height={20}
              />
              <Image
                src="/insta_cursive_white.svg"
                alt="Instagram logo"
                layout="fixed"
                width={51}
                height={19}
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book
