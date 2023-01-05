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

export const Form = () => (
  <StyledForm>
    <form>
      <h2>Fill in the fields to create a contributor card</h2>
      <Textfield label={'name'} placeholder={'Enter name...'} />
      <Textfield label={'role'} placeholder={'Enter role...'} />
      <Textfield label={'image'} placeholder={'Enter image url...'} />
      <Dropdown label={'team'} list={teams} />
      <Button>Create card</Button>
    </form>
  </StyledForm>
)
