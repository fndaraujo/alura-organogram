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
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Tech Leader',
      image: 'https://github.com/guilhermeonrails.png',
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: 'Marcos Vinicios Neves',
      role: 'Instructor',
      image: 'https://github.com/viniciosneves.png',
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: 'Juliana Amoasei',
      role: 'Instructor & Software Developer',
      image: 'https://github.com/JulianaAmoasei.png',
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: 'Luiz Fernando Ribeiro',
      role: 'Instructor',
      image: 'https://github.com/lfrprazeres.png',
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: 'Fernando Araujo',
      role: 'Developer & Computer Scientist',
      image: 'https://github.com/fndaraujo.png',
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'Hipster & Alura CTEO',
      image: 'https://github.com/peas.png',
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: 'Vinicius Dias',
      role: 'Zend Certified Engineer & Full Stack Developer',
      image: 'https://github.com/cviniciussdias.png',
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: 'André Bessa',
      role: 'Instructor & Software Developer',
      image: 'https://github.com/bessax.png',
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: 'Larissa Gabriela',
      role: 'Instructor & Medical Physicist',
      image: 'https://github.com/larissagabriela.png',
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: 'Guilherme Lima',
      role: 'Tech Leader',
      image: 'https://github.com/guilhermeonrails.png',
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: 'Caio Couto Moreira',
      role: 'Instructor & Mobile Developer',
      image: 'https://github.com/Kakomo.png',
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: 'Ricarth Lima',
      role: 'Instructor & Mobile Developer',
      image: 'https://github.com/ricarthlima.png',
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: 'Natan Souza',
      role: 'Designer & Developer',
      image: 'https://github.com/designernatan.png',
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: 'Lívia Cristina Gabos Martins',
      role: 'UX Master & Developer',
      image: 'https://github.com/liviagabos.png',
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: 'Camila Fernanda Alves',
      role: 'Instructor & System Engineer',
      image: 'https://github.com/camilafernanda.png',
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: 'Daniel Artine',
      role: 'Instructor & Tech Leader',
      image: 'https://github.com/danielartine.png',
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: 'Paulo Silveira',
      role: 'Hipster & Alura CTEO',
      image: 'https://github.com/peas.png',
      team: teams[6].name,
    },
  ]
  const [contributors, setContributors] = useState(initialContributors)
  const handleOnRecord = (contributor) =>
    setContributors([...contributors, contributor])
  const handleTeamRecord = (team) =>
    setTeams([...teams, { ...team, id: uuidv4() }])
  const changeTeamColor = (color, id) =>
    setTeams(
      teams.map((team) => {
        team.id === id && (team.color = color)
        return team
      })
    )
  const deleteContributor = (id) =>
    setContributors(contributors.filter((contributor) => contributor.id !== id))
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Form
        onRecord={handleOnRecord}
        onTeamRecord={handleTeamRecord}
        teams={teams.map((team) => team.name)}
      />
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
