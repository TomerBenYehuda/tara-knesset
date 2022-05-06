import React from 'react'
import AdminMember from './AdminMember'
import { useNavigate } from 'react-router-dom'
import AdminLogin from './AdminLogin'


export default function Admin({ members, searchValue }) {

  const navigate = useNavigate()

  const logout = async () => {
    const res = await fetch('https://keneset-api.herokuapp.com/user/logout', {
      method: "delete",
      credentials: "include"
    })
    const data = await res.json()
    if (data.err) {
      alert(data.err)
    } else {
      localStorage.removeItem('name')
      navigate('/login')
    }

  }



  return (
    <div>
      {
        !localStorage.name ?
          <>
            <AdminLogin />
          </>
          :
          <>
            <h1 style={{ paddingTop: 150 }}>Admin Page</h1>
            <button onClick={logout}>Logout</button>
            <AdminMember members={members} searchValue={searchValue} />
          </>
      }
    </div>
  )
}
