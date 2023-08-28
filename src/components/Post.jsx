import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
      <div className={styles.author}>
          <div className={styles.authorInfo}>
            <Avatar src="https://github.com/EngJao89.png"/>
            <strong>João Ricardo</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="11 de Julho ás 17:00" dateTime="11-07-22 08:13:30">
          Publicado a 1 mês
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>
          <a>
          👉 joao.software/mobiledev
          </a>
        </p>

        <p>
          <a>
            novoprojeto #nlw #rocketseat
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          required
        />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}