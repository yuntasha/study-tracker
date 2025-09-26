import Header from "./components/Header";
import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
      </div>
    </BrowserRouter>
  )
}