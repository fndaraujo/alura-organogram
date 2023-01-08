import { useState } from 'react'
import { Field } from '@/components/Field'
import { Dropdown } from '@/components/Dropdown'
import { Button } from '@/components/Button'
import { StyledForm } from '@/components/Form/style'

export const Form = ({ onRecord, onTeamRecord, teams }) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamColor, setTeamColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onRecord({ name, role, image, team })
    setName('')
    setRole('')
    setImage('')
    setTeam('')
  }
  const handleSubmitTeam = (e) => {
    e.preventDefault()
    onTeamRecord({ name: teamName, color: teamColor })
    setTeamName('')
    setTeamColor('')
  }
  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <h2>Fill in the fields to create a contributor card</h2>
        <Field
          isRequired
          label={'name'}
          placeholder={'Enter name...'}
          value={name}
          setValue={setName}
        />
        <Field
          isRequired
          label={'role'}
          placeholder={'Enter role...'}
          value={role}
          setValue={setRole}
        />
        <Field
          label={'image'}
          placeholder={'Enter image url...'}
          value={image}
          setValue={setImage}
        />
        <Dropdown
          isRequired
          label={'team'}
          list={teams}
          value={team}
          setValue={setTeam}
        />
        <Button>Create card</Button>
      </form>
      <form onSubmit={handleSubmitTeam}>
        <h2>Fill in the fields to create a team</h2>
        <Field
          isRequired
          label={'team'}
          placeholder={'Enter team name...'}
          value={teamName}
          setValue={setTeamName}
        />
        <Field
          isRequired
          type={'color'}
          label={'color'}
          placeholder={'Enter color...'}
          value={teamColor}
          setValue={setTeamColor}
        />
        <Button>Create team</Button>
      </form>
    </StyledForm>
  )
}
