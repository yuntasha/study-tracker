import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

/*
<div class="header">
            <div class="nav-tabs">
                <button class="nav-tab">타이머</button>
                <button class="nav-tab">할 일</button>
                <button class="nav-tab">로그인</button>
                <button class="nav-tab active">설정</button>
            </div>
            <div class="header-title">Study Tracker</div>
            <div class="header-subtitle">효율적인 학습 관리를 위한 도구</div>
        </div>
*/

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.navTabs}>
            <Link className={styles.navTab} to="/">타이머</Link>
            <Link className={styles.navTab} to="/todo">할 일</Link>
            <Link className={styles.navTab} to="/login">로그인</Link>
            <Link className={styles.navTab} to="/option">설정</Link>
        </div>
        <div className={styles.headerTitle}>Study Tracker</div>
        <div className={styles.headerSubtitle}>효율적인 학습 관리를 위한 도구</div>
    </div>
  )
}

export default Header;