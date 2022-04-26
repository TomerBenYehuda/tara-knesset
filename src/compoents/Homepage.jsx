import React, { useEffect, useState } from 'react'
import FiltersComp from './FiltersComp';
import FirstPage from './FirstPage';

import MembersList from './MembersList';

export default function Homepage({ members, searchValue }) {

    const [knessetRole, setKnessetRole] = useState([])
    const [govRole, setGovRole] = useState([])
    const [kentsetFilter, setKentsetFilter] = useState("")
    // const [personName, setPersonName] = React.useState("DEFAULT");
    


    useEffect(() => {
        (async () => {
            const res = await fetch('https://keneset-api.herokuapp.com/filter/knesset_role', {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                credentials: "include"
            })
            const data = await res.json();
            if (data.err) {
                alert(data.err)
            } else {
                // console.log(data.knesset_role);
                setKnessetRole(data.knesset_role)
            }
        })();

        (async () => {
            const res = await fetch('https://keneset-api.herokuapp.com/filter/gov_role', {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                credentials: "include"
            })
            const data = await res.json();
            if (data.err) {
                alert(data.err)
            } else {
                // console.log(data.gov_role);
                setGovRole(data.gov_role)
            }
        })()

    }, [])



    return (
        <div>
            <FirstPage />
            <FiltersComp members={members} knessetRole={knessetRole} kentsetFilter={kentsetFilter} setKentsetFilter={setKentsetFilter} />
            <MembersList members={members} searchValue={searchValue}  kentsetFilter={kentsetFilter}  />
        </div>
    )
}




// const filterme = async () => {
//     const res = await fetch('http://localhost:5000/filter/knesset_role', {
//         method: "post",
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify({ search: kentsetFilter }),
//         credentials: "include"
//     })
//     const data = await res.json()
//     setUpdate(data)
//     console.log(data);
    

// }