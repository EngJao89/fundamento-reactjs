import { Post } from "./Post";
import { Header } from "./components/Heade";

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Joao Ricardo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestias quam repudiandae recusandae facere fugiat, aut, earum, perferendis veritatis libero sit maiores delectus minima. Repudiandae rem veniam illum corporis atque?"
      />
    </div>
  )
}
