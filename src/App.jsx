import { useState } from 'react'
import './App.css'
import data from './data'
import Questions from './components/Questions'

function App() {

const [info, setInfo] = useState(data)
const [questionSelected, setQuestionSelected] = useState(null)

const getId = (id) => {
  setQuestionSelected(id)
}

  return (
    <main>
      <Questions data={info} getId={getId} questionSelected={questionSelected}/>
    </main>
  )
}

export default App
