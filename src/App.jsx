import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Banner } from '@/components/Banner'
import { Form } from '@/components/Form'
import { Team } from '@/components/Team'
import { Footer } from '@/components/Footer'
import { GlobalStyle } from '@/styles/globalstyle'

export const App = () => {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programming',
      color: '#57c278',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82cffa',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#a6d157',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#e06b69',
    },
    {
      id: uuidv4(),
      name: 'UX & Design',
      color: '#db6ebf',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#ffba05',
    },
    {
      id: uuidv4(),
      name: 'Inovation & Management',
      color: '#ff8a29',
    },
  ])
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
  const changeTeamColor = (color, name) =>
    setTeams(
      teams.map((team) => {
        team.name === name && (team.color = color)
        return team
      })
    )
  const deleteContributor = () => console.log('Delete contributor.')
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
          onDelete={deleteContributor}
          changeColor={changeTeamColor}
        />
      ))}
      <Footer />
    </>
  )
}
