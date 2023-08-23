import { Post } from "./components/Post";
import { Header } from "./components/Heade";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
