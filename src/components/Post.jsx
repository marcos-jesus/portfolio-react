import { format, formatDistanceToNow } from  'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import profileImage from '../assets/perfil.jpg'

export function Post({author, publishedAt, content}) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img src={profileImage} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={ publishedDateFormatted } dateTime={publishedAt.toISOString()}> { publishedDateRelativeToNow } </time>
        </header>

        <div className={styles.content}>
          { 
            content.map(line => {
              line
              if(line.type === 'title') {
                return <h3> {line.content}</h3>
              }

              if(line.type === 'paragraph') {
                return <p> {line.content} </p>
              }
            })
          }
        </div>
      </article>
    </>
  )
}
