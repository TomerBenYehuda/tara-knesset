import React from 'react'
import AdminMemberCard from './AdminMemberCard';
import MemberCard from './MemberCard';



export default function AdminMember({ members, searchValue, setUpdate}) {

    let cc = members.filter(members => members.first_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.last_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.party.toLowerCase().includes(searchValue?.toLowerCase()))
    

    return (
        <div id='memeberlist'>

            {searchValue == "" 
            ? members.map(members => <AdminMemberCard key={members.memberID} members={members} setUpdate={setUpdate} />) 
            : cc.map(members => <AdminMemberCard key={members.memberID} members={members} setUpdate={setUpdate} />)}

        </div>
    )
}


