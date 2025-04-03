import { Header } from './components/header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './Global.css'
import styles from './App.module.css'
import { Comment } from './components/Comment';

/*Autor: {
avatar_url:
name:""
role: ""
}

publishedAt: Date
Content: String
*/

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/GustavoJorgge.png',
      name: 'Gustavo Jorge',
      role: 'Overlander | Desenvolvedor'
    },
    content:[
       { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Vou realizar uma viagem para a Chapada dos Veadeiros, porém não tenho veiculos. Nesta condição, alguem consegue me dar alguma dica?'},
      { type: 'paragraph', content:'Pretendo fazer uma viagem de 5 dias e 4 noites.'}
    ],
    publishedAt: new Date('2025-04-03 20:35:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=70&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jane Oliveira',
      role: 'Trekking | Fotografa'
    },
    content:[
       { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Vou realizar uma viagem para a Chapada dos Veadeiros, porém não tenho veiculos. Nesta condição, alguem consegue me dar alguma dica?'},
      { type: 'paragraph', content:'Pretendo fazer uma viagem de 5 dias e 4 noites.'}
    ],
    publishedAt: new Date('2025-04-01 20:35:00'),
  },
  {
    id:3,
    author:{
      avatarUrl: 'https://github.com/GustavoJorgge.png',
      name: 'Cecilia Espinula',
      role: 'Overlander | Nutricionista'
    },
    content:[
       { type: 'paragraph', content:'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Vou realizar uma viagem para a Chapada dos Veadeiros, porém não tenho veiculos. Nesta condição, alguem consegue me dar alguma dica?'},
      { type: 'paragraph', content:'Pretendo fazer uma viagem de 5 dias e 4 noites.'}
    ],
    publishedAt: new Date('2025-04-02 20:35:00'),
  }
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          {posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>

      </div>
    </div>
  )
}

export default App

