import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Headers from './compoents/Headers'
import Main from './compoents/Main'

export default function App() {

  const [members, setMembers] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress == 100 ? clearInterval(timer) : prevProgress + 50));
    }, 600);

    setTimeout(async () => {
      const res = await fetch('https://keneset-api.herokuapp.com/members', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        credentials: "include"
      })
      const data = await res.json();
      if (data.err) {
        alert(data.err)
      } else {
        setMembers(data)
      }
    },1500)

  }, [])

  return (
    <div>
      <Router>
        <Headers members={members} setSearchValue={setSearchValue} searchValue={searchValue} />
        <Main members={members} searchValue={searchValue} progress={progress}/>
      </Router>
    </div>
  )
}
