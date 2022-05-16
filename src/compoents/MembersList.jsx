import React from 'react'
import MemberCard from './MemberCard';
import Box from '@mui/material/Box';
import Spinner from 'react-bootstrap/Spinner'



export default function MembersList({ members, searchValue, knessetFilterValue, loding }) {

    let cc = members.filter(members => members.first_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.last_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.party.toLowerCase().includes(searchValue?.toLowerCase()))
    let kenesst_role = members.filter(members => members.kenesst_role.includes(knessetFilterValue))
    let gov_role = members.filter(members => knessetFilterValue.includes(members.gov_role))
    let party = members.filter(members => knessetFilterValue.includes(members.party))
    let additional_role = members.filter(members => knessetFilterValue.includes(members.additional_role))
    let position = members.filter(members => members.position.includes(knessetFilterValue))

    return (
        <div>
            {
                loding ?
                    <div id='memeberlist'>
                        {
                            knessetFilterValue == "" ?
                                <>
                                    {searchValue == "" ? members.map(members => <MemberCard key={members.memberID} members={members} />) : cc.map(members => <MemberCard key={members.memberID} members={members} />)}
                                </>

                                :
                                <>
                                    {kenesst_role.map(members => <MemberCard key={members.memberID} members={members} />)}
                                    {gov_role.map(members => <MemberCard key={members.memberID} members={members} />)}
                                    {party.map(members => <MemberCard key={members.memberID} members={members} />)}
                                    {additional_role.map(members => <MemberCard key={members.memberID} members={members} />)}
                                    {position.map(members => <MemberCard key={members.memberID} members={members} />)}
                                </>

                        }

                    </div>
                    :
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <Spinner animation="border" variant="primary" />
                    </Box>
            }

        </div>
    )
}
