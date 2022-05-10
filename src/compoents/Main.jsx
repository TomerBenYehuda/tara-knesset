import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import AdminAddMember from './AdminAddMember'
import AdminLogin from './AdminLogin'
import ContactUs from './ContactUs'
import Homepage from './Homepage'

export default function Main({members,searchValue,progress, setUpdate}) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage members={members}searchValue={searchValue} progress={progress}/>} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/login" element={<AdminLogin />} />
                <Route path="/tara-admin" element={<Admin members={members} searchValue={searchValue} setUpdate={setUpdate} />} />
                <Route path="/tara-admin/addnewmember" element={<AdminAddMember members={members} searchValue={searchValue} setUpdate={setUpdate} />} />
            </Routes>
        </div>
    )
}
