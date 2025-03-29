import { Header } from './components/header'
import { Post } from './Post'
import './Global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          <Post author="Gustavo Jorge"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto dolorem veritatis. Similique sequi dolore enim veniam recusandae illum autem sit, quis laudantium iure, fuga quo! Incidunt autem laborum natus!"
          />
          <Post
            author="guilherme"
            content="Publicando sites . com .br"
          />
        </main>

      </div>
    </div>
  )
}

export default App

