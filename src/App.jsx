import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='page-header'>
      <h1 className='page-title'>Todo App</h1>
      </header>
      <main className='page-main'>this is a todo app!</main>
    </>
  )
}

export default App
