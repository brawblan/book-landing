import { Link } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/instagram_grad.svg' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Mark Wahlbeck',
  keywords: 'books, programming',
  description: 'The Last Hacker'
}


export default Meta