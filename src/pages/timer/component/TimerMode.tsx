import { useState } from 'react'
import styles from "./TimerMode.module.css"

const TimerMode = () => {
    const [mode, setMode] = useState<'study' | 'rest'>('study');
    return (
        <div className={styles.timerMode}>
            <button className={`${styles.modeBtn} ${mode === 'study' ? styles.active : ''}`} onClick={() => setMode('study')}>공부</button>
            <button className={`${styles.modeBtn} ${mode === 'rest' ? styles.active : ''}`} onClick={() => setMode('rest')}>휴식</button>
        </div>
    )
}

export default TimerMode