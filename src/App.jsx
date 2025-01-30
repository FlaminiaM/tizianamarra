import { useState } from 'react'
import Title from './components/Title.jsx'
import './App.scss'
import Button from './components/atoms/Button/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Title text="helloooooo"/>
    
      <Button type='primary' text='Scopri come posso aiutarti'/>
      <Button type='secondary' text='Scopri di piu'/>
      <Button type='tertiary' text='Prendi appuntamento'/>
    </>
  )
}

export default App
