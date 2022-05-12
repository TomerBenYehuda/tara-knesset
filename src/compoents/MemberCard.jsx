import React, { useState } from 'react'
import { Card, Modal, Button, Container, Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsappTwoToneIcon from '@mui/icons-material/WhatsappTwoTone';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function MemberCard({ members }) {

    const [membersId, setMembersId] = useState([])

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
                setMembersId(data)
            }
        })()

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        memberid()
        localStorage.id = members.memberID
        setShow(true)
    }

    const doverTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            הדובר מופקד על ייצוג של חבר הכנסת מול אמצעי התקשורת, ולכן באופן ישיר גם מול האזרחים. על מנת להשיג את תגובתו או עמדתו של חבר כנסת על נושא מסוים, מומלץ לפנות לדובר
        </Tooltip>
    );
    const consultTooltipp = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            היועץ פוליטי מסייע לחבר הכנסת לנתח סיטואציות שונות ולבחור כיצד לנהוג ולהגיב אליהן, בדגש על התנהלות מול גורמים פוליטיים
        </Tooltip>
    );
    const headTooltipp = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            ראש מטה מרכז את הפעילות השוטפת והפרויקטים המיוחדים בהם עוסקת לשכת חבר הכנסת
        </Tooltip>
    );

    return (
        <>


            <Card style={{ width: '18rem' }} key={members.memberID} onClick={handleShow}>
                <Card.Img src={members.picture} />
                <Card.Body>
                    <Card.Title dir="rtl">{members.first_name} {members.last_name}</Card.Title>
                    <Card.Text>
                        {members.gov_role === "null" ? " " : members.gov_role.split(',', 1).splice(0)}
                    </Card.Text>
                </Card.Body>
            </Card>

            {membersId.map(mid => <Modal show={show} onHide={handleClose} animation={false} key={mid.memberID} centered size="xl">
                <Modal.Header closeButton>
                    <img className='imgmember' src={mid.picture} alt="" />
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={2}></Col>
                            <Col xs={7}>
                                <h1 className='title'>{mid.first_name} {mid.last_name}</h1>
                                <p className='secondline'>{mid.party} , {mid.position}</p>
                            </Col>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className='rowfirst'>
                            <Col xs={4} className='infowork'>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 100, hide: 300 }}
                                    overlay={headTooltipp}
                                >
                                    <p className='smalltitle'>ראש מטה <HelpOutlineOutlinedIcon fontSize='small' /></p>
                                </OverlayTrigger>
                                <p className='littletitle'>שם: {mid.head_office_name === "null" ? "אין" : mid.head_office_name}</p>
                                <p className='littletitle'>טלפון: {mid.head_office_phone === "null" ? "אין" : mid.head_office_phone}</p>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 100, hide: 300 }}
                                    overlay={consultTooltipp}
                                >
                                    <p className='smalltitle'>יועץ פוליטי <HelpOutlineOutlinedIcon fontSize='small' /></p>
                                </OverlayTrigger>
                                <p className='littletitle'>שם: {mid.political_consultant_name === "null" ? "אין" : mid.political_consultant_name}</p>
                                <p className='littletitle'>טלפון: {mid.political_consultant_phone === "null" ? "אין" : mid.political_consultant_phone}</p>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 100, hide: 300 }}
                                    overlay={doverTooltip}
                                >
                                    <p className='smalltitle'>דובר <HelpOutlineOutlinedIcon fontSize='small' /></p>
                                </OverlayTrigger>
                                <p className='littletitle'>שם: {mid.speaker_name === "null" ? "אין" : mid.speaker_name}</p>
                                <p className='littletitle'>טלפון: {mid.speaker_phone === "null" ? "אין" : mid.speaker_phone}</p>
                            </Col>
                            <Col xs={5} className='infowork'>
                                <p className='smalltitle'><b>תפקיד בממשלה: </b> {mid.gov_role === "null" ? "אין" : mid.gov_role}</p>
                                <p className='littletitle'>סיעה: {mid.party}</p>
                                <p className='littletitle'><b>תפקיד בכנסת: </b>{mid.kenesst_role === "null" ? "אין" : mid.kenesst_role}</p>
                                <p className='smalltitle'>{mid.position}</p>
                                <p className='littletitle'><b>תפקיד נוסף: </b> {mid.additional_role === "null" ? "אין" : mid.additional_role}</p>
                            </Col>
                            <Col xs={3} className='infomemebr'>
                                <p dir="rtl"><a href={`https://wa.me/972${mid.personal_phone.replace(/-/, "")}`}><WhatsappTwoToneIcon /></a> {mid.first_name} {mid.last_name} </p>
                                <p> <a href={`mailto:${mid.email}`}>{mid.email === "null" ? "אין" : mid.email}<EmailIcon /></a></p>
                                <p> <a href={mid.facebook} rel="noreferrer" target="_blank">{mid.facebook.split('/').splice(3)}<FacebookRoundedIcon /></a></p>
                                <p> <a href={mid.twitter} rel="noreferrer" target="_blank">{mid.twitter === "null" ? "אין" : mid.twitter.split('/').splice(3)}<TwitterIcon /></a> </p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>)}


        </>
    )
}


