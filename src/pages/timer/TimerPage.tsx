import styles from "./TimerPage.module.css"
import TodoDisplay from './component/TodoDisplay'
import TimerDisplay from './component/TimerDisplay'
import TimerMode from './component/TimerMode'
import TimerControl from './component/TimerControl'
import TimerSetting from './component/TimerSetting'

const TimerPage = () => {
  return (
    <div className={styles.timerSection}>
      <TodoDisplay />
      <TimerDisplay />
      <TimerMode />
      <TimerControl />
      <TimerSetting />
    </div>
  )
}

export default TimerPage