import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Headers from './compoents/Headers'
import Main from './compoents/Main'

export default function App() {

  const [members, setMembers] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    (async () => {
      const res = await fetch('https://keneset-api.herokuapp.com/members', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        credentials: "include"
      })
      const data = await res.json();
      if (data.err) {
        alert(data.err)
      } else {
        console.log(data.sort());
        setMembers(data)
      }
    })()

  }, [])

  return (
    <div>
      <Router>
        <Headers members={members} setSearchValue={setSearchValue} searchValue={searchValue} />
        <Main members={members} searchValue={searchValue} />
      </Router>
    </div>
  )
}
