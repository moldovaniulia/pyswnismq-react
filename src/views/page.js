import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>2pyswNiSmq</title>
        <meta property="og:title" content="2pyswNiSmq" />
      </Helmet>
      <AppComponent src="/playground_assets/p1-1200h.jpg"></AppComponent>
    </div>
  )
}

export default Page
