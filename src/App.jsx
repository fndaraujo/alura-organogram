import { useState } from 'react'
import { Banner } from '@/components/Banner'
import { Form } from './components/Form'
import { GlobalStyle } from '@/styles/globalstyle'

export const App = () => {
  const [contributors, setContributors] = useState([])
  const handleOnRecord = (contributor) =>
    setContributors(...contributors, contributor)
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Form onRecord={handleOnRecord} />
    </>
  )
}
