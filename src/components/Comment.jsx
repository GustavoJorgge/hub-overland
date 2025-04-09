import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'



export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        console.log('deletar')

        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
        console.log(likeCount)
        setLikeCount(likeCount + 1)
    }


    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=50&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carla Gomes</strong>
                            <time title="31 de Março às 23:51" dateTime="2025/07/12 23:46:30">Cerca de 1h </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                            Curtir <span>{likeCount}</span>
                        </button>
                </footer>
            </div>

        </div>
    )
}