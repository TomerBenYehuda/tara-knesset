import React from 'react'
import MemberCard from './MemberCard';



export default function MembersList({ members, searchValue, kentsetFilter }) {

    let cc = members.filter(members => members.first_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.last_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.party.toLowerCase().includes(searchValue?.toLowerCase()))
    let kenesst_role = members.filter(members => members.kenesst_role.includes(kentsetFilter))
    let gov_role = members.filter(members => members.gov_role.includes(kentsetFilter))
    let party = members.filter(members => members.party.includes(kentsetFilter))
    let additional_role = members.filter(members => members.additional_role.includes(kentsetFilter))
    let position = members.filter(members => members.position.includes(kentsetFilter))

    return (
        <div id='memeberlist'>
            {
                kentsetFilter === "" ?
                    <>
                        {searchValue === "" ? members.map(members => <MemberCard key={members.memberID} members={members} />) : cc.map(members => <MemberCard key={members.memberID} members={members} />)}
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





            {/* {searchValue !== "" && cc.map(members => <MemberCard key={members.memberID} members={members} />)} */}
            {/* {kentsetFilter !== "תפקיד בכנסת" && bb.map(members => <MemberCard key={members.memberID} members={members} />)} */}
        </div>
    )
}



// members.filter((members) => {
//     if (searchValue === "" && kentsetFilter === "") {
//         return members
//     } else if (members.first_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.last_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.party.toLowerCase().includes(searchValue?.toLowerCase()) || members.kenesst_role.includes(kentsetFilter)) {
//         return members
//     }

// }).map(members => <MemberCard key={members.memberID} members={members} />)