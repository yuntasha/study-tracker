import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.navTabs}>
            <NavLink className={({isActive}) => isActive ? `${styles.navTab} ${styles.active}` : styles.navTab} to="/">타이머</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navTab} ${styles.active}` : styles.navTab} to="/todo">할 일</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navTab} ${styles.active}` : styles.navTab} to="/login">로그인</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navTab} ${styles.active}` : styles.navTab} to="/option">설정</NavLink>
        </div>
        <div className={styles.headerTitle}>Study Tracker</div>
        <div className={styles.headerSubtitle}>효율적인 학습 관리를 위한 도구</div>
    </div>
  )
}