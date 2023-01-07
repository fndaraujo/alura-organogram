import { useState } from 'react'
import { Banner } from '@/components/Banner'
import { Form } from '@/components/Form'
import { Team } from '@/components/Team'
import { Footer } from '@/components/Footer'
import { GlobalStyle } from '@/styles/globalstyle'

export const App = () => {
  const teams = [
    {
      name: 'Programming',
      colors: {
        primary: '#57c278',
        secundary: '#d9f7e9',
      },
    },
    {
      name: 'Front-End',
      colors: {
        primary: '#82cffa',
        secundary: '#e8f8ff',
      },
    },
    {
      name: 'Data Science',
      colors: {
        primary: '#a6d157',
        secundary: '#f0f8e2',
      },
    },
    {
      name: 'Devops',
      colors: {
        primary: '#e06b69',
        secundary: '#fde7e8',
      },
    },
    {
      name: 'UX & Design',
      colors: {
        primary: '#db6ebf',
        secundary: '#fae9f5',
      },
    },
    {
      name: 'Mobile',
      colors: {
        primary: '#ffba05',
        secundary: '#fff5d9',
      },
    },
    {
      name: 'Inovation & Management',
      colors: {
        primary: '#ff8a29',
        secundary: '#ffeedf',
      },
    },
  ]
  const initialContributors = [
    {
      name: 'Guilherme Lima',
      role: 'Tech Leader',
      image: 'https://github.com/guilhermeonrails.png',
      team: teams[1].name,
    },
    {
      name: 'Marcos Vinicios Neves',
      role: 'Instructor',
      image: 'https://github.com/viniciosneves.png',
      team: teams[1].name,
    },
    {
      name: 'Juliana Amoasei',
      role: 'Instructor & Software Developer',
      image: 'https://github.com/JulianaAmoasei.png',
      team: teams[1].name,
    },
    {
      name: 'Luiz Fernando Ribeiro',
      role: 'Instructor',
      image: 'https://github.com/lfrprazeres.png',
      team: teams[1].name,
    },
    {
      name: 'Fernando Araujo',
      role: 'Developer & Computer Scientist',
      image: 'https://github.com/fndaraujo.png',
      team: teams[1].name,
    },
    {
      name: 'Paulo Silveira',
      role: 'Hipster & Alura CTEO',
      image: 'https://github.com/peas.png',
      team: teams[0].name,
    },
    {
      name: 'Vinicius Dias',
      role: 'Zend Certified Engineer & Full Stack Developer',
      image: 'https://github.com/cviniciussdias.png',
      team: teams[0].name,
    },
    {
      name: 'André Bessa',
      role: 'Instructor & Software Developer',
      image: 'https://github.com/bessax.png',
      team: teams[0].name,
    },
    {
      name: 'Larissa Gabriela',
      role: 'Instructor & Medical Physicist',
      image: 'https://github.com/larissagabriela.png',
      team: teams[0].name,
    },
    {
      name: 'Guilherme Lima',
      role: 'Tech Leader',
      image: 'https://github.com/guilhermeonrails.png',
      team: teams[2].name,
    },
    {
      name: 'Caio Couto Moreira',
      role: 'Instructor & Mobile Developer',
      image: 'https://github.com/Kakomo.png',
      team: teams[5].name,
    },
    {
      name: 'Ricarth Lima',
      role: 'Instructor & Mobile Developer',
      image: 'https://github.com/ricarthlima.png',
      team: teams[5].name,
    },
    {
      name: 'Natan Souza',
      role: 'Designer & Developer',
      image: 'https://github.com/designernatan.png',
      team: teams[4].name,
    },
    {
      name: 'Lívia Cristina Gabos Martins',
      role: 'UX Master & Developer',
      image: 'https://github.com/liviagabos.png',
      team: teams[4].name,
    },
    {
      name: 'Camila Fernanda Alves',
      role: 'Instructor & System Engineer',
      image: 'https://github.com/camilafernanda.png',
      team: teams[3].name,
    },
    {
      name: 'Daniel Artine',
      role: 'Instructor & Tech Leader',
      image: 'https://github.com/danielartine.png',
      team: teams[3].name,
    },
    {
      name: 'Paulo Silveira',
      role: 'Hipster & Alura CTEO',
      image: 'https://github.com/peas.png',
      team: teams[6].name,
    },
  ]
  const [contributors, setContributors] = useState(initialContributors)
  const handleOnRecord = (contributor) =>
    setContributors([...contributors, contributor])
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Form onRecord={handleOnRecord} teams={teams.map((team) => team.name)} />
      {teams.map((team) => (
        <Team
          key={team.name}
          team={team}
          contributors={contributors.filter(
            (contributor) => contributor.team === team.name
          )}
        />
      ))}
      <Footer />
    </>
  )
}
