import React from 'react'
import styles from "./TimerSetting.module.css"

type Props = {}

const TimerSetting = (props: Props) => {
  return (
    <div className={styles.timerSettings}>
        <div className={styles.settingGroup}>
            <label className={styles.settingLabel}>공부 시간 (분)</label>
            <input type="number" className={styles.settingInput} value="25" min="1" max="120" />
        </div>
        <div className={styles.settingGroup}>
            <label className={styles.settingLabel}>휴식 시간 (분)</label>
            <input type="number" className={styles.settingInput} value="5" min="1" max="30" />
        </div>
    </div>
  )
}

export default TimerSetting