import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function SubFilter({ securityFilter, lawpoliceFilter, foreignaffairsFilter, healthwelfareFilter, environmentFilter, cultureFilter, economyFilter, educationFilter }) {

    const [show, setShow] = useState(false)

    const handleClickOpen = () => {
        setShow(sh => !sh);
    };

    // Show Filters//

    const handleSecurity = () => {
        securityFilter()
    };

    const handleLawpolice = () => {
        lawpoliceFilter()
    };

    const handleforeignaffairs = () => {
        foreignaffairsFilter()
    };

    const handlehealthwelfareFilter = () => {
        healthwelfareFilter()
    };

    const handleEnvironmentFilter = () => {
        environmentFilter()
    };

    const handleCultureFilter = () => {
        cultureFilter()
    };

    const handleEconomyFilter = () => {
        economyFilter()
    };

    const handleEducationFilter = () => {
        educationFilter()
    };



    return (
        <div className='subjectsection'>
            <div className='searchsubject' onClick={handleClickOpen}>
                :חיפוש לפי נושא {!show ? <AddIcon /> : <RemoveIcon />}
            </div>

            <div className='imageandtext' style={{ display: show ? "inline" : "none" }} >
                <div className='firstline'>


                    <div className='filterimagecontainer' onClick={handleEconomyFilter}>
                        <img src="https://i.ibb.co/C9PgWSd/Rectangle-32.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">כלכלה</h5>
                    </div>
                    <div className='filterimagecontainer' onClick={handleCultureFilter}>
                        <img src="https://i.ibb.co/KhZRgb4/Rectangle-28-1.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">תרבות ופנאי</h5>
                    </div>
                    <div className='filterimagecontainer' onClick={handleEducationFilter}>
                        <img src="https://i.ibb.co/4tvrwNf/Rectangle-28.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">חינוך</h5>
                    </div>
                    <div className='filterimagecontainer' onClick={handleEnvironmentFilter}>
                        <img src="https://i.ibb.co/zb8Fpd5/Rectangle-30.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">איכות הסביבה</h5>
                    </div>
                </div>
                <div>
                    <div className='filterimagecontainer' onClick={handlehealthwelfareFilter}>
                        <img src="https://i.ibb.co/w7r2rqN/Rectangle-31.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">בריאות ורווחה</h5>
                    </div>
                    <div className='filterimagecontainer' onClick={handleSecurity}>
                        <img src="https://i.ibb.co/GnkP2Br/Rectangle-32.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">בטחון</h5>
                    </div>
                    <div className='filterimagecontainer' onClick={handleforeignaffairs}>
                        <img src="https://i.ibb.co/4KGH9Rf/Rectangle-29-1.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">חוץ</h5>
                    </div>
                    <div className='filterimagecontainer' onClick={handleLawpolice}>
                        <img src="https://i.ibb.co/DYhm9f4/Rectangle-29.png" alt="Rectangle-28-1" border="0" ></img>
                        <h5 className="filtertext">משפט ומשטרה</h5>
                    </div>
                </div>
            </div>
        </div>


    )
}

