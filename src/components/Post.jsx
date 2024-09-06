import { format, formatDistanceToNow } from  'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import profileImage from '../assets/perfil.jpg'
import Repository from '../assets/repository.png'
import RepositoryTwo from '../assets/repository2.png'

export function Post({author, publishedAt, content, image}) {
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
            content.map((line) => {
              line
              if(line.type === 'title') {
                return <h3 key={line.content}> {line.content}</h3>
              }

              if(line.type === 'paragraph') {
                return <p key={line.content}> {line.content} </p>
              }

            })
          }
          {image && (
            <>
              <img 
                className={styles.images} 
                src={Repository} 
                alt="repository" 
              />
              <img
                className={styles.images}
                src={RepositoryTwo} 
                alt="repository" 
              />
            </>
          )}
        </div>
      </article>
    </>
  )
}