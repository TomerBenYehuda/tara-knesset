import React from 'react'
import AdminMember from './AdminMember'
import { Button } from 'react-bootstrap'
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
            <div style={{ paddingTop: 150, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <h1>Admin Page</h1>
              <Button variant="primary" onClick={logout}>Logout</Button>
            </div>
            <AdminMember members={members} searchValue={searchValue} />
          </>
      }
    </div>
  )
}
