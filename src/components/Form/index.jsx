import { Textfield } from '@/components/Textfield'
import { Dropdown } from '@/components/Dropdown'
import { Button } from '@/components/Button'
import { StyledForm } from '@/components/Form/style'

const teams = [
  'Programming',
  'Front-End',
  'Data Science',
  'Devps',
  'UX & Design',
  'Mobile',
  'Inovation & Management',
]

const handleSubmit = (e) => {
  e.preventDefault()
}

export const Form = () => (
  <StyledForm>
    <form onSubmit={handleSubmit}>
      <h2>Fill in the fields to create a contributor card</h2>
      <Textfield
        isRequired={true}
        label={'name'}
        placeholder={'Enter name...'}
      />
      <Textfield
        isRequired={true}
        label={'role'}
        placeholder={'Enter role...'}
      />
      <Textfield label={'image'} placeholder={'Enter image url...'} />
      <Dropdown isRequired={true} label={'team'} list={teams} />
      <Button>Create card</Button>
    </form>
  </StyledForm>
)
