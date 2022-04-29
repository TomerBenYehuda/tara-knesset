import React, { useState } from 'react'
import MemberCard from './MemberCard';

export default function SubjectMemeberList({ showMe, security, lawpolice, foreignaffairs, healthwelfare, environment, culture, economy, education }) {


    return (
        <div id='memeberlist'>

            {showMe == "" && security.map(members => <MemberCard key={members.memberID} members={members} />)}

            {showMe == "law" && lawpolice.map(members => <MemberCard key={members.memberID} members={members} />) }

            {showMe == "foreign" &&
                foreignaffairs.map(members => <MemberCard key={members.memberID} members={members} />)
            }

            {showMe == "health" &&
                healthwelfare.map(members => <MemberCard key={members.memberID} members={members} />)
            }

            {showMe == "envi" &&
                environment.map(members => <MemberCard key={members.memberID} members={members} />)
            }

            {showMe == "culture" &&
                culture.map(members => <MemberCard key={members.memberID} members={members} />)
            }

            {showMe == "econ" &&
                economy.map(members => <MemberCard key={members.memberID} members={members} />)
            }

            {showMe == "edu" &&
                education.map(members => <MemberCard key={members.memberID} members={members} />)
            }

        </div>
    )
}
