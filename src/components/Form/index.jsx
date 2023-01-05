import { Textfield } from '@/components/Textfield'
import { StyledForm } from '@/components/Form/style'

export const Form = () => (
  <StyledForm>
    <form>
      <h2>Fill in the fields to create a contributor card</h2>
      <Textfield label={'name'} placeholder={'Enter name...'} />
      <Textfield label={'role'} placeholder={'Enter role...'} />
      <Textfield label={'image'} placeholder={'Enter image url...'} />
    </form>
  </StyledForm>
)
