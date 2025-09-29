import { useState } from 'react'
import styles from "./TimerControl.module.css"

const TimerControl = () => {
    const [isWork, setIsWork] = useState(false);

    return (
        <div className={styles.timerControls}>
            {isWork ? (
                <button className={`${styles.timerBtn} ${styles.pause}`} onClick={() => setIsWork(false)}>일시정지</button>
            ) : (
                <>
                    <button className={`${styles.timerBtn} ${styles.start}`} onClick={() => setIsWork(true)}>시작</button>
                    <button className={`${styles.timerBtn} ${styles.reset}`}>리셋</button>
                </>
            )}
        </div>
    )
}

export default TimerControl