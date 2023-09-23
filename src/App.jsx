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
  {
    id: 4,
    author: {
      name: 'Marcos Jesus',
      role: 'Frontend Engineer'
    },
    content: [
      { type: 'title', content: 'Pernambucanas Seleção RH'},
      { type: 'paragraph', content: 'Desenvolvi o projeto de Seleção RH interno da Pernambucanas que tem vinculo direto com a aplicação de Landpage Portal (Gestão de Pessoas) para cadastro de pessoas que estão em busca de uma oportunidade de emprego, dentro da Pernambucanas o famoso ( Trabalhe Conosco ).' },
      { type: 'paragraph', content: 'O prazo desse projeto era de 3 meses, porém quando entrei na empresa já estava com atraso de 6 meses quase beirando 7.'},
      { type: 'paragraph', content: 'Foi um cãos total, cheguei em meio a um incêndio sem fim, a onde eu trabalhei domingo a domingo, altas horas em busca de realizar a finalização do projeto.'},
      { type: 'paragraph', content: 'Com muit esforço e luta conseguimos, eu e um colega pegamos firme no frontend, fizemos as telas com dados mockados afim de esperar o backend mandar os endpoints para nós consumir.'},
      { type: 'paragraph', content: 'Foi um projeto bem complexo, cheio de regras de negocio, como alterar diversos status de um candidato, adicionar vaga de acordo com o km que ele especificou, todas essas mudanças gerava N impactos em outros lugares.'},
    ],

    publishedAt: new Date('2023-09-23 00:52')
  },
  {
    id: 5,
    author: {
      name: 'Marcos Jesus',
      role: 'Frontend Engineer'
    },
    content: [
      { type: 'title', content: 'Pernambucanas Produtos Financeiros'},
      { type: 'paragraph', content: 'Neste projeto eu somente fiz algumas alterações no layout, deixando o mesmo responsivo e correção de alguns bugs de estilo.' },
      { type: 'paragraph', content: 'Realizei também algumas mudanças no ambiente onde foi necessário apontar o ambiente QA para Produção, para fins de testes de ambiente, VTEX atualmente tem um problema, ambiente QA é diferente de Produção.' },
    ],

    publishedAt: new Date('2023-09-23 00:54')
  },
  {
    id: 6,
    author: {
      name: 'Marcos Jesus',
      role: 'Frontend Engineer'
    },
    content: [
      { type: 'title', content: 'Pernambucanas Catálogo Web Revendedores'},
      { type: 'paragraph', content: 'Recebi o apelido de pai logo após finalizar o Projeto de Seleção RH, pois este projeto foi o que eu mais tive contato, realizei grandes alterações e manti ele por um bom tempo.' },
      { type: 'paragraph', content: 'Realizei features grandes que geravam impacto, trabalhei consumindo API da VTEX, desde lógica de carrinho até checkout, envio e calculo de produtos.'},
      { type: 'paragraph', content: 'Features como calculo de comissão para revendedor, desconto para novos revendedores, algumas features no layout antigo, realizei a atualização de layout solicitado pela Pernambucanas.' },
      { type: 'paragraph', content: 'Onde eu teria que deixar o layout de acordo com a proposta do figma que eles me passaram.' },
      { type: 'paragraph', content: 'Tive muito contato com ambiente de produção, sempre subindo novas features e realizando correção de bugs em produção.' },
    ],

    publishedAt: new Date('2023-09-23 01:02')
  },
  {
    id: 7,
    author: {
      name: 'Marcos Jesus',
      role: 'Frontend Engineer'
    },
    content: [
      { type: 'title', content: 'Pernambucanas Criação de Catálogo Web '},
      { type: 'paragraph', content: 'Até o presente momento, realizei pequenas features e atualizações neste projeto, como alterar parametros da chamada da store da api, para o backend mandar algo especifico que não era esperado e passou a ser.' },
    ],

    publishedAt: new Date('2023-09-23 01:03')
  },
  
];

posts.sort((a,b) => b.publishedAt - a.publishedAt)

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
