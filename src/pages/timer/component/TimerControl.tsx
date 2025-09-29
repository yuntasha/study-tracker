import React, { useState } from 'react'
import styles from "./TimerControl.module.css"

type Props = {}

const TimerControl = (props: Props) => {
    const [isWork, setIsWork] = useState(false);
    if (isWork) {
        return (
            <div className={styles.timerControls}>
                <button className={`${styles.timerBtn} ${styles.pause}`} onClick={() => setIsWork(false)}>일시정지</button>
            </div>
        )
    }
    return (
        <div className={styles.timerControls}>
            <button className={`${styles.timerBtn} ${styles.start}`} onClick={() => setIsWork(true)}>시작</button>
            <button className={`${styles.timerBtn} ${styles.reset}`}>리셋</button>
        </div>
    )
}

export default TimerControl