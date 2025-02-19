import { useState } from 'react'
import './App.css'
import ArticlesForm from './components/ArticlesForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArticlesForm />
    </>
  )
}

export default App
