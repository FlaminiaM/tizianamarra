import { useState } from 'react'
import Title from './components/Title.jsx'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Title text="helloooooo"/>
     <div className='hello'>
        <p>ciao</p>
        <p className='sub'>world</p>
     </div>
    </>
  )
}

export default App
