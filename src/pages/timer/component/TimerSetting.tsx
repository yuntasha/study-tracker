import styles from "./TimerSetting.module.css"

const TimerSetting = () => {
  return (
    <div className={styles.timerSettings}>
        <label className={styles.settingGroup} htmlFor="study-time-input">
            <span className={styles.settingLabel}>공부 시간 (분)</span>
            <input id="study-time-input" type="number" className={styles.settingInput} value="25" min="1" max="120" />
        </label>
        <label className={styles.settingGroup} htmlFor="rest-time-input">
            <span className={styles.settingLabel}>휴식 시간 (분)</span>
            <input id="rest-time-input" type="number" className={styles.settingInput} value="5" min="1" max="30" />
        </label>
    </div>
  )
}

export default TimerSetting