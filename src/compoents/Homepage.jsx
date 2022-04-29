import React, { useEffect, useState } from 'react'
import FiltersComp from './FiltersComp';
import FirstPage from './FirstPage';

import MembersList from './MembersList';
import SubFilter from './SubFilter';
import SubjectMemeberList from './SubjectMemeberList';

export default function Homepage({ members, searchValue }) {

    const [knessetRole, setKnessetRole] = useState([])
    const [govRole, setGovRole] = useState([])
    const [party, setParty] = useState([])
    const [additionalRole, setAdditionalRole] = useState([])
    const [kentsetFilter, setKentsetFilter] = useState("")

    // Subject Filter //
    const [security, setSecurity] = useState([])
    const [lawpolice, setLawpolice] = useState([])
    const [foreignaffairs, setForeignaffairs] = useState([])
    const [healthwelfare, setHealthwelfare] = useState([])
    const [environment, setEnvironment] = useState([])
    const [culture, setCulture] = useState([])
    const [economy, setEconomy] = useState([])
    const [education, setEducation] = useState([])
    const [istrue, setIstrue] = useState(false)
    const [showMe, setShowMe] = useState("")
    


    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:5000/filter/knesset_role', {
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
            const res = await fetch('http://localhost:5000/filter/gov_role', {
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
        })();

        (async () => {
            const res = await fetch('http://localhost:5000/filter/party', {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                credentials: "include"
            })
            const data = await res.json();
            if (data.err) {
                alert(data.err)
            } else {
                // console.log(data.gov_role);
                setParty(data.party)
            }
        })();

        (async () => {
            const res = await fetch('http://localhost:5000/filter/additional_role', {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
                credentials: "include"
            })
            const data = await res.json();
            if (data.err) {
                alert(data.err)
            } else {
                // console.log(data.additional_role);
                setAdditionalRole(data.additional_role)
            }
        })()

    }, [])

    

    const securityFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/security', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setSecurity(data)
            setIstrue(true)
            setShowMe("")
        }
    }

    const lawpoliceFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/lawpolice', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setLawpolice(data)
            setIstrue(true)
            setShowMe("law")
        }
    }

    const foreignaffairsFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/foreignaffairs', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setForeignaffairs(data)
            setIstrue(true)
            setShowMe("foreign")
        }
    }

    const healthwelfareFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/healthwelfare', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setHealthwelfare(data)
            setIstrue(true)
            setShowMe("health")
        }
    }

    const environmentFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/environment', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setEnvironment(data)
            setIstrue(true)
            setShowMe("envi")
        }
    }

    const cultureFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/culture', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setCulture(data)
            setIstrue(true)
            setShowMe("culture")
        }
    }

    const economyFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/economy', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setEconomy(data)
            setIstrue(true)
            setShowMe("econ")
        }
    }

    const educationFilter = async () => {
        const res = await fetch('http://localhost:5000/filter/education', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            credentials: "include"
        })
        const data = await res.json()
        if (data.err) {
            console.log(data.err)
        } else {
            console.log(data);
            setEducation(data)
            setIstrue(true)
            setShowMe("edu")
        }
    }

    return (
        <div>
            <FirstPage />
            <FiltersComp members={members} knessetRole={knessetRole} kentsetFilter={kentsetFilter} setKentsetFilter={setKentsetFilter} govRole={govRole} party={party} additionalRole={additionalRole} setIstrue={setIstrue} />
            <SubFilter securityFilter={securityFilter} lawpoliceFilter={lawpoliceFilter} foreignaffairsFilter={foreignaffairsFilter} healthwelfareFilter={healthwelfareFilter} environmentFilter={environmentFilter} cultureFilter={cultureFilter} economyFilter={economyFilter} educationFilter={educationFilter}/>
            {
                istrue ? <SubjectMemeberList showMe={showMe} security={security} lawpolice={lawpolice} foreignaffairs={foreignaffairs} healthwelfare={healthwelfare} environment={environment} culture={culture} economy={economy} education={education}/>  : <MembersList members={members} searchValue={searchValue}  kentsetFilter={kentsetFilter}  />
            }
            {/* <SubjectMemeberList security={security}/>
            <MembersList members={members} searchValue={searchValue}  kentsetFilter={kentsetFilter}  /> */}
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