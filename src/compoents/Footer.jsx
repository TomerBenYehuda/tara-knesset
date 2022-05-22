import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const navigate = useNavigate()

    const takeMe = (des) => {
        navigate('/' + des)
    }

    return (
        <div className='footercomp'>
            <div className='footersection'>
                <img className='junexlogo' src="https://i.ibb.co/fvVG4S8/Whats-App-Image-2022-05-22-at-5-07-48-PM-removebg-preview.png" alt='junexlogo'></img>
            </div>
            <hr></hr>
            <p className='rights'>כל הזכויות שמורות ©</p>
        </div>
    )
}
