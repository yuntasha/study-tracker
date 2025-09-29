import React from 'react'
import styles from "./TimerDisplay.module.css"

type Props = {}

const TimerDisplay = (props: Props) => {
  return (
    <div className={styles.timerDisplay}>25:00</div>
  )
}

export default TimerDisplay