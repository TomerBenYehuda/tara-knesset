import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




export default function AdminLogin() {

    const navigate = useNavigate()

    const [adminName, setAdminName] = useState("")
    const [password, setPassword] = useState("")

    const handleClcik = async () => {
        const res = await fetch('https://keneset-api.herokuapp.com/user/login', {
            method: "post",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ adminName, password }),
            credentials: "include"
        })
        const data = await res.json()
        setdatalogin(data)
        if (data.err) {
            document.getElementById("err").innerHTML = data.err

        } else {
            navigate('/tara-admin')
            localStorage.name = data.adminName

        }
        console.log(data);

    }




    return (
        <div>
            <div className='login'>

                <Card sx={{
                    height: 320, width: 365, boxShadow: 3
                }}>
                    <span id="err"></span>
                    <CardContent sx={{ margin: 3 }}>

                        <TextField sx={{ marginBottom: 3 }} id="outlined-basic" label="Name" variant="outlined" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
                        <br />
                        <TextField id="outlined-password-input" type="password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />

                    </CardContent>

                    <CardActions>
                        <Button onClick={handleClcik} size="small">Login</Button>
                    </CardActions>
                </Card>

            </div>
        </div>
    )
}

