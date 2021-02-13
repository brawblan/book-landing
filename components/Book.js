import React from 'react'
import styles from '../styles/Book.module.css'

const Book = () => {
  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        <img src="https://randomwordgenerator.com/picture.php" alt=""/>
      </div>
      <div className={styles.grid}>
        <h2>THE LAST HACKER</h2>
        <p>
          In this show, you'll explore stories of the future that we hope should never be and possibilities that blur the lines between fiction and reality.
        </p>
        <p>
          My nam eis Mark Wahlbeck, and welcome to the World of Wahlbeck!
        </p>
      </div>
    </div>
  )
}

export default Book
