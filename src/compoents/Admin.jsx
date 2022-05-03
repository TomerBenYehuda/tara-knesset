import React from 'react'
import AdminMember from './AdminMember'

export default function Admin({ members, searchValue }) {



  return (
    <div>
        <h1>akuo</h1>
       <AdminMember members={members} searchValue={searchValue}/>
    </div>
  )
}
