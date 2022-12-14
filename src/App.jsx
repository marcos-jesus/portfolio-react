import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css' 

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Marcos Jesus',
      role: 'Frontend Engineer'
    },
    content: [
      { type: 'title', content: 'Painel de Agentes'},
      { type: 'paragraph', content: 'Desenvolvi um painel de Agentes para a empresa de telecomunicações Evence Telecom.' },
      { type: 'paragraph', content: 'O painel estava obsoleto era um SSR ( Server Side Rendering) o intuito foi transforma-lo em uma SPA ( Single Page Application).'},
      { type: 'paragraph', content: 'Aplicando a Tecnologia Vue.js, fiz a migração e refatoração de toda a lógica, implementei novas features.'},
      { type: 'paragraph', content: 'Uma das melhorias foi retirar o long pooling que a aplicação fazia a cada x segundos mandava uma request para verificar se houve alguma alteração.'},
      { type: 'paragraph', content: 'A solução foi implementar um canal de Socket.io onde ele ficava aberto ouvindo um evento, caso esse evento sofresse alteração ele me notificava e fazia alteração em tempo real.'},
      { type: 'paragraph', content: 'Tirando a carga de Request e Response que o Banco de Dados recebia.'},
    ],

    publishedAt: new Date('2022-12-13 20:49:00')
  },
  {
    id: 2,
    author: {
      name: 'Marcos Jesus',
      role: 'Frontend Engineer'
    },
    content: [
      { type: 'title', content: 'Tela de Callcenter' },
      { type: 'paragraph', content: 'Desenvolvi a tela de Callcenter, onde mostrava informações relacionada ao Painel de Agentes.' },
      { type: 'paragraph', content: 'Callcenter era um SSR (Server Side Render) também assim como painel de Agentes, era Laravel com Blade template, migrei para SPA ( Single Page Application).'},
      { type: 'paragraph', content: 'Aplicando a Tecnologia Vue.js, fazendo a refatoração e implementando novas features, o objetivo era transformar o Callcenter em real time removendo o Long Polling.'},
    ],

    publishedAt: new Date('2022-12-14 15:04:00')
  },
  {
    id: 3,
    author: {
      name: 'Marcos Jesus',
      role: 'Frontend Engineer'
    },
    content: [
      { type: 'title', content: 'Feature Chat no Painel de Agentes'},
      { type: 'paragraph', content: 'Desenvolvi um microserviço de mensageria com NodeJS + Express, com autenticação JWT + Socket.io e canais de socket com arquitetura de room ( salas ).' },
      { type: 'paragraph', content: 'Desenvolvi também o frontend do chat parte de UI (User Interface), fiz todas autenticações e validações.'}
    ],

    publishedAt: new Date('2022-12-14 16:59:00')
  },
  
];

const debug = posts.map(post => {})

console.log(debug)

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
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
