import React, { useEffect, useState } from 'react'
import MemberCard from './MemberCard';



export default function MembersList({ members, searchValue, kentsetFilter, personName }) {

    let cc = members.filter(members => members.first_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.last_name.toLowerCase().includes(searchValue?.toLowerCase()) || members.party.toLowerCase().includes(searchValue?.toLowerCase()))
    let bb = members.filter(members => members.kenesst_role.includes(kentsetFilter))

    return (
        <div id='memeberlist'>
            {
                kentsetFilter == "" ?
                    <>
                        {searchValue === "" ? members.map(members => <MemberCard key={members.memberID} members={members} />) : cc.map(members => <MemberCard key={members.memberID} members={members} />)}
                    </>

                    :
                    <>
                        {bb.map(members => <MemberCard key={members.memberID} members={members} />)}
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