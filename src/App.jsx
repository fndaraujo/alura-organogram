import { useState } from 'react'
import { Banner } from '@/components/Banner'
import { Form } from '@/components/Form'
import { Team } from '@/components/Team'
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
  const [contributors, setContributors] = useState([])
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
    </>
  )
}
