import React, { useState } from 'react'
import { Card, Modal, Button, Container, Col, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';


export default function AdminMemberCard({ members, setUpdate }) {

    const [membersId, setMembersId] = useState([])
    const [facebook, setFacebook] = useState(members.facebook);
    const [twitter, setTwitter] = useState(members.twitter);
    const [party, setParty] = useState(members.party);
    const [gov_role, setGov_role] = useState(members.gov_role);
    const [kenesst_role, setKenesst_role] = useState(members.kenesst_role);
    const [additional_role, setAdditional_role] = useState(members.additional_role);
    const [personal_phone, setPersonal_phone] = useState(members.personal_phone);
    const [office_phone, setOffice_phone] = useState(members.office_phone);
    const [email, setEmail] = useState(members.email);
    const [speaker_name, setSpeaker_name] = useState(members.speaker_name);
    const [speaker_phone, setSpeaker_phone] = useState(members.speaker_phone);
    const [head_office_name, setHead_office_name] = useState(members.head_office_name);
    const [head_office_phone, setHead_office_phone] = useState(members.head_office_phone);
    const [political_consultant_name, setPolitical_consultant_name] = useState(members.political_consultant_name);
    const [political_consultant_phone, setPolitical_consultant_phone] = useState(members.political_consultant_phone);
    const [picture, setPicture] = useState(members.picture);
    const [position, setPosition] = useState(members.position);

    const memberid = () => {
        (async () => {
            const res = await fetch(`https://keneset-api.herokuapp.com/members/${members.memberID}`, {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                credentials: "include"
            })
            const data = await res.json();
            if (data.err) {
                alert(data.err)
            } else {
                console.log(data);
                setMembersId(data)
            }
        })()

    }

    const editMember = async () => {
        const res = await fetch(`https://keneset-api.herokuapp.com/admin/${members.memberID}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ facebook, twitter, party, gov_role, kenesst_role, additional_role, personal_phone, office_phone, email, speaker_name, speaker_phone, head_office_name, head_office_phone, political_consultant_name, political_consultant_phone, picture, position }),
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            alert(data.err)
        } else {
            setUpdate((up) => !up)
            setShow(false)
        }
        alert(data.msg)
        console.log(data);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        memberid()
        localStorage.id = members.memberID
        setShow(true)
    }


    return (
        <>


            <Card style={{ width: '18rem' }} key={members.memberID} onClick={handleShow}>
                <Card.Img src={members.picture} />
                <Card.Body>
                    <Card.Title>{members.first_name} {members.last_name}</Card.Title>
                    <Card.Text>
                        {members.gov_role}
                    </Card.Text>
                </Card.Body>
            </Card>

            {membersId.map(mid =>
                <Modal show={show} onHide={handleClose} animation={false} key={mid.memberID} centered size="xl" backdrop="static">
                    <Modal.Header className='adminmodalheader' closeButton>
                        <h4>
                            {mid.first_name} {mid.last_name}
                        </h4>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                <Col className='adminmodalcol'>
                                    <p><u>:תמונה</u></p>
                                    <TextField id="outlined-basic" label={picture.toString()} placeholder={picture.toString()} variant="outlined" onChange={(e) => setPicture(e.target.value)} />
                                    <p><u>:טלפון אישי</u></p>
                                    <TextField id="outlined-basic" label={personal_phone.toString()} placeholder={personal_phone.toString()} variant="outlined" onChange={(e) => setPersonal_phone(e.target.value)} />
                                    <p><u>:טלפון משרד</u></p>
                                    <TextField id="outlined-basic" label={office_phone.toString()} placeholder={office_phone.toString()} variant="outlined" onChange={(e) => setOffice_phone(e.target.value)} />
                                    <p><u>:אימייל</u></p>
                                    <TextField id="outlined-basic" label={email.toString()} placeholder={email.toString()} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                                    <p><u>:פייסבוק</u></p>
                                    <TextField id="outlined-basic" label={facebook.toString()} placeholder={facebook.toString()} variant="outlined" onChange={(e) => setFacebook(e.target.value)} />
                                    <p><u>:טוויטר</u></p>
                                    <TextField id="outlined-basic" label={twitter.toString()} placeholder={twitter.toString()} variant="outlined" onChange={(e) => setTwitter(e.target.value)} />
                                </Col>
                                <Col className='adminmodalcol'>
                                    <p><u>:אופזיציה\קואליציה</u></p>
                                    <TextField id="outlined-basic" label={position.toString()} placeholder={position.toString()} variant="outlined" onChange={(e) => setPosition(e.target.value)} />
                                    <p><u>:סיעה</u></p>
                                    <TextField id="outlined-basic" label={party.toString()} placeholder={party.toString()} variant="outlined" onChange={(e) => setParty(e.target.value)} />
                                    <p><u>:תפקיד בממשלה</u></p>
                                    <TextField id="outlined-basic" label={gov_role.toString()} placeholder={gov_role.toString()} variant="outlined" onChange={(e) => setGov_role(e.target.value)} />
                                    <p><u>:תפקיד בכנסת</u></p>
                                    <TextField id="outlined-basic" label={kenesst_role.toString()} placeholder={kenesst_role.toString()} variant="outlined" onChange={(e) => setKenesst_role(e.target.value)} />
                                    <p><u>:תפקיד נוסף</u></p>
                                    <TextField id="outlined-basic" label={additional_role.toString()} placeholder={additional_role.toString()} variant="outlined" onChange={(e) => setAdditional_role(e.target.value)} />
                                </Col>
                                <Col className='adminmodalcol'>
                                    <p><u>:שם של הדובר</u></p>
                                    <TextField id="outlined-basic" label={speaker_name.toString()} placeholder={speaker_name.toString()} variant="outlined" onChange={(e) => setSpeaker_name(e.target.value)} />
                                    <p><u>:טלפון של הדובר</u></p>
                                    <TextField id="outlined-basic" label={speaker_phone.toString()} placeholder={speaker_phone.toString()} variant="outlined" onChange={(e) => setSpeaker_phone(e.target.value)} />
                                    <p><u>:שם של ראש מטה</u></p>
                                    <TextField id="outlined-basic" label={head_office_name.toString()} placeholder={head_office_name.toString()} variant="outlined" onChange={(e) => setHead_office_name(e.target.value)} />
                                    <p><u>:טלפון של ראש מטה</u></p>
                                    <TextField id="outlined-basic" label={head_office_phone.toString()} placeholder={head_office_phone.toString()} variant="outlined" onChange={(e) => setHead_office_phone(e.target.value)} />
                                    <p><u>:שם של יועץ פוליטי</u></p>
                                    <TextField id="outlined-basic" label={political_consultant_name.toString()} placeholder={political_consultant_name.toString()} variant="outlined" onChange={(e) => setPolitical_consultant_name(e.target.value)} />
                                    <p><u>:טלפון של יועץ פוליטי</u></p>
                                    <TextField id="outlined-basic" label={political_consultant_phone.toString()} placeholder={political_consultant_phone.toString()} variant="outlined" onChange={(e) => setPolitical_consultant_phone(e.target.value)} />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            ביטול עדכון
                        </Button>
                        <Button variant="primary" onClick={editMember}>
                            עדכן חבר כנסת
                        </Button>
                    </Modal.Footer>
                </Modal>)}


        </>
    )
}


