import React from 'react'
import AdminMember from './AdminMember'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import AdminLogin from './AdminLogin'


export default function Admin({ members, searchValue, setUpdate }) {

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
            <div dir="rtl" style={{ paddingTop: 150, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div>
                <h1>😀 שלום רב </h1>
                <h3>
                  פה אפשר לעדכן ולהוסיף חבר כנסת
                </h3>
                <h4>
                  - כדי לעדכן חבר כנסת יש ללחוץ על התמונה ולעדכן את השדות הרלוונטים
                </h4>
                <h4>
                  - כדי להוסיף חבר כנסת חדש, יש ללחוץ על הכפתור "הוסף חבר כנסת חדש"
                </h4>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ marginLeft: 30 }} variant="primary" >הוסף חבר כנסת חדש</Button>
                <Button variant="primary" onClick={logout}>Logout</Button>
              </div>
            </div>
            <AdminMember members={members} searchValue={searchValue} setUpdate={setUpdate} />
          </>
      }
    </div>
  )
}
