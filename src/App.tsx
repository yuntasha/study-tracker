import Header from "./components/Header";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimerPage from "./pages/timer/TimerPage";
import TodoPage from "./pages/todo/TodoPage";
import OptionPage from "./pages/option/OptionPage";
import AuthPage from "./pages/login/AuthPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<TimerPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/option" element={<OptionPage />} />
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}