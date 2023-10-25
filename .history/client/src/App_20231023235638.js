import React, {
  useEffect,
  useState
} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("//search").then(
      response => response.json()
    ).then(
      data
    )
  })

  return ( 
    <div >

    </div>
  )
}

export default App