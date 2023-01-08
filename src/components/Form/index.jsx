import { useState } from 'react'
import { Textfield } from '@/components/Textfield'
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
        <Textfield
          isRequired={true}
          label={'name'}
          placeholder={'Enter name...'}
          value={name}
          setValue={setName}
        />
        <Textfield
          isRequired={true}
          label={'role'}
          placeholder={'Enter role...'}
          value={role}
          setValue={setRole}
        />
        <Textfield
          label={'image'}
          placeholder={'Enter image url...'}
          value={image}
          setValue={setImage}
        />
        <Dropdown
          isRequired={true}
          label={'team'}
          list={teams}
          value={team}
          setValue={setTeam}
        />
        <Button>Create card</Button>
      </form>
      <form onSubmit={handleSubmitTeam}>
        <h2>Fill in the fields to create a team</h2>
        <Textfield
          isRequired={true}
          label={'team'}
          placeholder={'Enter team name...'}
          value={teamName}
          setValue={setTeamName}
        />
        <Textfield
          isRequired={true}
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
