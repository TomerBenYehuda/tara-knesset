import React, { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 450,
        },
    },
};

export default function FiltersComp({ members, knessetRole, kentsetFilter, setKentsetFilter, filterme, setPersonName }) {

    const [filtername, setFiltername] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFiltername(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setKentsetFilter(event.target.value);
    };

    // const handlefilter = async ({ target }) => {
    //     // filterme()
    //     setKentsetFilter(target.value);
    //     setPersonName(true)
    //     console.log(kentsetFilter);
    // }


    // onChange={(e) => setKentsetFilter(e.target.value)}
    return (
        <div className='filterContainer'>
            <h1>פילטר</h1>



            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">תפקיד בכנסת</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={filtername}
                    onChange={handleChange}
                    input={<OutlinedInput label="תפקיד בכנסת" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {knessetRole.map((ket) => (
                        <MenuItem key={ket.id} value={ket.knesset_role}>
                            <Checkbox checked={filtername.indexOf(ket.knesset_role) > -1} />
                            <ListItemText primary={ket.knesset_role} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    )
}




            {/* <select value={kentsetFilter} onChange={handlefilter}  >
                {console.log(kentsetFilter)}
                <option value="DEFAULT" > תפקיד בכנסת</option>
                {
                    knessetRole.map(ket => (

                        <option key={ket.id} value={ket.knesset_role} >{ket.knesset_role}</option>
                    ))

                }

            </select> */}