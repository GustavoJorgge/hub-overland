import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/GustavoJorgge.png" />
                    <div className={styles.authorInfo}>
                        <strong>Gustavo Jorge</strong>
                        <span>Overlander</span>
                    </div>
                </div>
                <time title="31 de Março às 23:51" dateTime="2025/07/12 23:46:30">Publicado à 1h </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Vou realizar uma viagem para a Chapada dos Veadeiros, porém não tenho veiculos. Nesta condição, alguem consegue me dar alguma dica?</p>
                <p>Pretendo fazer uma viagem de 5 dias e 4 noites.</p>,
                <p><a href=""> #ChapadaDosVeadeiros</a>
                    <a href="">{' '}#Trip </a>
                    <a href="">{' '}#Trekking.</a>
                </p>
            </div>
        </article>

    )
}