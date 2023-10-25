import React, {
  useEffect,
  useState
} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api")
  })

  return ( 
    <div >

    </div>
  )
}

export default App