import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'



// estado = variaveis que eu quero que o componente monitore
export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post interessante!'
    ])

    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateForm = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment() {
        event.preventDefault()

        const newCommentText = event.target.comment.value

        //imutabilidade 
        setComments([...comments, newCommentText])
        setNewCommentText('')
        // event.target.comment.value = '';
        // console.log(comments)
    }


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasborder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateForm} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p><a href="#">{line.content}</a> </p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Comentario:</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe aqui seu comentario...'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>

    )
}