import React from 'react'
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';

export default function FirstPage() {

    return (

        <section id="kenestheader">
            <div className="container-fluid">
                <div className='kenestimg'>
                    <h1 className='centertext'>ספר הטלפונים הדיגיטלי של חברי הכנסת ועוזריהם</h1>
                    <a href="#memeberlist" >
                        <ArrowCircleDownOutlinedIcon className='icondown' sx={{ color: "#184885", fontSize: 58 }} />
                    </a>
                </div>
            </div>
        </section>

    )
}
