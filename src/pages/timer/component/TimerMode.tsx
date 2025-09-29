import React, { useState } from 'react'
import styles from "./TimerMode.module.css"

type Props = {}

const TimerMode = (props: Props) => {
    const [isStudy, setIsStudy] = useState(true);
    return (
        <div className={styles.timerMode}>
            <button className={`${styles.modeBtn} ${isStudy?styles.active:""}`} onClick={() => setIsStudy(true)}>공부</button>
            <button className={`${styles.modeBtn} ${!isStudy?styles.active:""}`} onClick={() => setIsStudy(false)}>휴식</button>
        </div>
    )
}

export default TimerMode