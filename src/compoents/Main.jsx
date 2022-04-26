import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactUs from './ContactUs'
import Homepage from './Homepage'

export default function Main({members,searchValue}) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage members={members}searchValue={searchValue} />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </div>
    )
}
