import React from 'react'
import styles from "./TodoDisplay.module.css"

type Props = {}

const TodoDisplay = (props: Props) => {
  return (
    <div className={styles.currentTask}>
        <div className={styles.taskTitle}>JavaScript 기초 학습</div>
        <div className={styles.taskSubtitle}>현재 선택된 할 일입니다</div>
    </div>
  )
}

export default TodoDisplay