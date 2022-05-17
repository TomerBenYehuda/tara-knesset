import React, { useEffect, useState } from 'react'
import FiltersComp from './FiltersComp';
import FirstPage from './FirstPage';
import Footer from './Footer';

import MembersList from './MembersList';
import Paginations from './Paginations';
import SubFilter from './SubFilter';
import SubjectMemeberList from './SubjectMemeberList';

export default function Homepage({ members, searchValue, loding }) {

    const [knessetRole, setKnessetRole] = useState([])
    const [govRole, setGovRole] = useState([])
    const [party, setParty] = useState([])
    const [additionalRole, setAdditionalRole] = useState([])
    const [knessetFilterValue, setKnessetFilterValue] = useState("")

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

    // Pageinte
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = members.slice(indexOfFirstPost, indexOfLastPost);

    // // Change page
    // const paginate = pageNumber => setCurrentPage(pageNumber);



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
        })();

        (async () => {
            const res = await fetch('https://keneset-api.herokuapp.com/filter/party', {
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
            const res = await fetch('https://keneset-api.herokuapp.com/filter/additional_role', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/security', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/lawpolice', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/foreignaffairs', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/healthwelfare', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/environment', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/culture', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/economy', {
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
        const res = await fetch('https://keneset-api.herokuapp.com/filter/education', {
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
            <FiltersComp members={members} knessetRole={knessetRole} knessetFilterValue={knessetFilterValue} setKnessetFilterValue={setKnessetFilterValue} govRole={govRole} party={party} additionalRole={additionalRole} setIstrue={setIstrue} />
            <SubFilter securityFilter={securityFilter} lawpoliceFilter={lawpoliceFilter} foreignaffairsFilter={foreignaffairsFilter} healthwelfareFilter={healthwelfareFilter} environmentFilter={environmentFilter} cultureFilter={cultureFilter} economyFilter={economyFilter} educationFilter={educationFilter} />
            {
                istrue ? <SubjectMemeberList showMe={showMe} security={security} lawpolice={lawpolice} foreignaffairs={foreignaffairs} healthwelfare={healthwelfare} environment={environment} culture={culture} economy={economy} education={education} /> : <MembersList members={members} searchValue={searchValue} knessetFilterValue={knessetFilterValue} loding={loding} membpage={currentPosts}/>
            }
            <Paginations
                postsPerPage={postsPerPage}
                totalPosts={members.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <Footer />
        </div>
    )
}

