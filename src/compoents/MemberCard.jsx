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
                console.log(data);
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
            דובר זה מישהו שמדבר מטעמך
        </Tooltip>
    );
    const consultTooltipp = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            יועץ זה מישהו שמדבר מטעמך
        </Tooltip>
    );
    const headTooltipp = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            ראש מטה זה מישהו שמדבר מטעמך
        </Tooltip>
    );

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

            {membersId.map(mid => <Modal show={show} onHide={handleClose} animation={false} key={mid.memberID} centered size="xl">
                <Modal.Header closeButton>
                    <img className='imgmember' src={mid.picture} alt="" />
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={4}></Col>
                            <Col xs={5}>
                                <h1 className='title'>חבר כנסת</h1>
                                <p className='secondline'>{mid.party} , {mid.position} <PhoneEnabledIcon /> </p>
                            </Col>
                            <Col xs={4}></Col>
                        </Row>
                        <Row className='rowfirst'>
                            <Col xs={4}>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 100, hide: 300 }}
                                    overlay={doverTooltip}
                                >
                                    <p className='smalltitle'>דובר <HelpOutlineOutlinedIcon fontSize='small' /></p>
                                </OverlayTrigger>
                                <p className='littletitle'>שם: {mid.speaker_name}</p>
                                <p className='littletitle'>טלפון: {mid.speaker_phone}</p>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 100, hide: 300 }}
                                    overlay={consultTooltipp}
                                >
                                    <p className='smalltitle'>יועץ פוליטי <HelpOutlineOutlinedIcon fontSize='small' /></p>
                                </OverlayTrigger>
                                <p className='littletitle'>שם: {mid.political_consultant_name}</p>
                                <p className='littletitle'>טלפון: {mid.political_consultant_phone}</p>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 100, hide: 300 }}
                                    overlay={headTooltipp}
                                >
                                    <p className='smalltitle'>ראש מטה <HelpOutlineOutlinedIcon fontSize='small' /></p>
                                </OverlayTrigger>
                                <p className='littletitle'>שם: {mid.head_office_name}</p>
                                <p className='littletitle'>טלפון: {mid.head_office_phone}</p>
                            </Col>
                            <Col xs={5}>
                                <p className='smalltitle'>תפקיד בממשלה: {mid.gov_role}</p>
                                <p className='littletitle'>סיעה: {mid.party}</p>
                                <p className='smalltitle'>תפקיד בכנסת</p>
                                <p className='littletitle'>{mid.kenesst_role}</p>
                                <p className='smalltitle'>{mid.position}</p>
                                <p className='littletitle'>{mid.additional_role}</p>
                            </Col>
                            <Col xs={3} className='infomemebr'>
                                <p>{mid.first_name} {mid.last_name} <WhatsappTwoToneIcon /></p>
                                <p>{mid.email} <EmailIcon /></p>
                                <p>{mid.facebook.split('/').splice(3)} <FacebookRoundedIcon /></p>
                                <p>{mid.twitter.split('/').splice(3)} <TwitterIcon /></p>

                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>)}


        </>
    )
}


