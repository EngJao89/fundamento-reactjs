import { Post } from "./Post";
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
          <Post 
            author="Joao Ricardo" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestias quam repudiandae recusandae facere fugiat, aut, earum, perferendis veritatis libero sit maiores delectus minima. Repudiandae rem veniam illum corporis atque?"
          />
        </main>
      </div>
    </div>
  )
}
