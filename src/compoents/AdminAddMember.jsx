import React, { useState } from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function AdminAddMember({ setUpdate }) {
    const navigate = useNavigate()

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [party, setParty] = useState("");
    const [gov_role, setGov_role] = useState("");
    const [kenesst_role, setKenesst_role] = useState("");
    const [additional_role, setAdditional_role] = useState("");
    const [personal_phone, setPersonal_phone] = useState("");
    const [office_phone, setOffice_phone] = useState("");
    const [email, setEmail] = useState("");
    const [speaker_name, setSpeaker_name] = useState("");
    const [speaker_phone, setSpeaker_phone] = useState("");
    const [head_office_name, setHead_office_name] = useState("");
    const [head_office_phone, setHead_office_phone] = useState("");
    const [political_consultant_name, setPolitical_consultant_name] = useState("");
    const [political_consultant_phone, setPolitical_consultant_phone] = useState("");
    const [picture, setPicture] = useState("");
    const [position, setPosition] = useState("");


    const addNewMember = async () => {
        const res = await fetch(`https://keneset-api.herokuapp.com/admin`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ first_name, last_name, facebook, twitter, party, gov_role, kenesst_role, additional_role, personal_phone, office_phone, email, speaker_name, speaker_phone, head_office_name, head_office_phone, political_consultant_name, political_consultant_phone, picture, position }),
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            alert(data.err)
        } else {
            setUpdate((up) => !up)
            navigate('/tara-admin')
        }

        alert(data.msg)
        console.log(data);
    }

    const goBack = () => {
        navigate('/tara-admin')
    }

    return (
        <div dir="rtl" className='AdminAddMembercon'>
            <Button className='backbtn' onClick={goBack}>חזרה לעמוד מנהלים</Button>
            <h3>פרטים אישים:</h3>
            <div className='AdminAddMemberinput'>
                <div>
                    <p><u>שם פרטי:</u></p>
                    <TextField id="outlined-basic" label="שם פרטי" variant="outlined" onChange={(e) => setFirst_name(e.target.value)} />
                    <p><u>שם משפחה:</u></p>
                    <TextField id="outlined-basic" label="שם משפחה" variant="outlined" onChange={(e) => setLast_name(e.target.value)} />
                </div>
                <div>
                    <p><u>תמונה:</u></p>
                    <TextField id="outlined-basic" label="תמונה" variant="outlined" onChange={(e) => setPicture(e.target.value)} />
                    <p><u>טלפון אישי:</u></p>
                    <TextField id="outlined-basic" label="טלפון אישי" variant="outlined" onChange={(e) => setPersonal_phone(e.target.value)} />
                    <p><u>טלפון משרד:</u></p>
                    <TextField id="outlined-basic" label="טלפון משרד" variant="outlined" onChange={(e) => setOffice_phone(e.target.value)} />
                </div>
                <div>
                    <p><u>אימייל:</u></p>
                    <TextField id="outlined-basic" label="אימייל" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                    <p><u>פייסבוק:</u></p>
                    <TextField id="outlined-basic" label="פייסבוק" variant="outlined" onChange={(e) => setFacebook(e.target.value)} />
                    <p><u>טוויטר:</u></p>
                    <TextField id="outlined-basic" label="טוויטר" variant="outlined" onChange={(e) => setTwitter(e.target.value)} />
                </div>
            </div>
            <h3>פרטים ממשלתיים:</h3>
            <div className='AdminAddMemberinput'>
                <div>
                    <p><u>אופוזיציה\קואליציה:</u></p>
                    <TextField id="outlined-basic" label="אופוזיציה\קואליציה" variant="outlined" onChange={(e) => setPosition(e.target.value)} />
                    <p><u>סיעה:</u></p>
                    <TextField id="outlined-basic" label="סיעה" variant="outlined" onChange={(e) => setParty(e.target.value)} />
                </div>
                <div>
                    <p><u>תפקיד בממשלה:</u></p>
                    <TextField id="outlined-basic" label="תפקיד בממשלה" variant="outlined" onChange={(e) => setGov_role(e.target.value)} />
                    <p><u>תפקיד בכנסת:</u></p>
                    <TextField id="outlined-basic" label="תפקיד בכנסת" variant="outlined" onChange={(e) => setKenesst_role(e.target.value)} />
                </div>
                <div>
                    <p><u>תפקיד נוסף:</u></p>
                    <TextField id="outlined-basic" label="תפקיד נוסף" variant="outlined" onChange={(e) => setAdditional_role(e.target.value)} />
                </div>
            </div>
            <h3>פרטים נלווים:</h3>
            <div className='AdminAddMemberinput'>
                <div>
                    <p><u>שם של הדובר:</u></p>
                    <TextField id="outlined-basic" label="שם של הדובר" variant="outlined" onChange={(e) => setSpeaker_name(e.target.value)} />
                    <p><u>טלפון של הדובר:</u></p>
                    <TextField id="outlined-basic" label="טלפון של הדובר" variant="outlined" onChange={(e) => setSpeaker_phone(e.target.value)} />
                </div>
                <div>
                    <p><u>שם של ראש מטה:</u></p>
                    <TextField id="outlined-basic" label="שם של ראש מטה" variant="outlined" onChange={(e) => setHead_office_name(e.target.value)} />
                    <p><u>טלפון של ראש מטה:</u></p>
                    <TextField id="outlined-basic" label="טלפון של ראש מטה" variant="outlined" onChange={(e) => setHead_office_phone(e.target.value)} />
                </div>
                <div>
                    <p><u>שם של יועץ פוליטי:</u></p>
                    <TextField id="outlined-basic" label="שם של יועץ פוליטי" variant="outlined" onChange={(e) => setPolitical_consultant_name(e.target.value)} />
                    <p><u>טלפון של יועץ פוליטי:</u></p>
                    <TextField id="outlined-basic" label="טלפון של יועץ פוליטי" variant="outlined" onChange={(e) => setPolitical_consultant_phone(e.target.value)} />
                </div>
            </div>

            <div className='addnewmemberbtn'>
                <Button variant="primary" onClick={addNewMember}>הוסף חבר כנסת חדש</Button>
            </div>


        </div>
    )
}
