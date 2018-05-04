import React from 'react'

import styles from './content.module.css'

export default ({ children }) => (
  <div className={'aa ' + styles.content}>{children}</div>
)
