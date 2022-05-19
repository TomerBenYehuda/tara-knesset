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
const MenuPropss = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const position = ['אופוזיציה', "קואליציה"]

export default function FiltersComp({ knessetRole, setKnessetFilterValue, govRole, party, additionalRole, setIstrue }) {

    const [filtername, setFiltername] = React.useState([]);
    const [filtername2, setFiltername2] = React.useState([]);
    const [filtername3, setFiltername3] = React.useState([]);
    const [filtername4, setFiltername4] = React.useState([]);
    const [filtername5, setFiltername5] = React.useState([]);


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFiltername(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setKnessetFilterValue(event.target.value);
        setIstrue(false)

    };

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setFiltername2(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setKnessetFilterValue(event.target.value);
        setIstrue(false)
    };

    const handleChange3 = (event) => {
        const {
            target: { value },
        } = event;
        setFiltername3(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setKnessetFilterValue(event.target.value);
        setIstrue(false)
    };

    const handleChange4 = (event) => {
        const {
            target: { value },
        } = event;
        setFiltername4(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setKnessetFilterValue(event.target.value);
        setIstrue(false)
    };

    const handleChange5 = (event) => {
        const {
            target: { value },
        } = event;
        setFiltername5(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setKnessetFilterValue(event.target.value);
        setIstrue(false)
    };

    return (
        <div className='filterContainer'>
            <div className="filters">
                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-multiple-checkbox-label">קואליציה\אופוזיציה</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filtername5}
                        onChange={handleChange5}
                        variant="standard"
                        // input={<OutlinedInput label="קואליציה\אופזיציה" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuPropss}
                    >
                        {position.map((position) => (
                            <MenuItem className='menuitemselect' key={position} value={position}>
                                <Checkbox checked={filtername5.indexOf(position) > -1} />
                                <ListItemText primary={position} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-multiple-checkbox-label">סיעה</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filtername3}
                        onChange={handleChange3}
                        variant="standard"
                        // input={<OutlinedInput label="סיעה" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuPropss}
                    >
                        {party.map((party) => (
                            <MenuItem className='menuitemselect' key={party.id} value={party.party}>
                                <Checkbox checked={filtername3.indexOf(party.party) > -1} />
                                <ListItemText primary={party.party} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-multiple-checkbox-label">תפקיד נוסף</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filtername4}
                        onChange={handleChange4}
                        variant="standard"
                        // input={<OutlinedInput label="תפקיד נוסף" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {additionalRole.map((additionalRole) => (
                            <MenuItem className='menuitemselect' key={additionalRole.id} value={additionalRole.additional_role}>
                                <Checkbox checked={filtername4.indexOf(additionalRole.additional_role) > -1} />
                                <ListItemText primary={additionalRole.additional_role} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-multiple-checkbox-label">תפקיד בממשלה</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filtername2}
                        onChange={handleChange2}
                        variant="standard"
                        // input={<OutlinedInput label="תפקיד בממשלה" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {govRole.map((gov) => (
                            <MenuItem className='menuitemselect' key={gov.id} value={gov.gov_role}>
                                <Checkbox checked={filtername2.indexOf(gov.gov_role) > -1} />
                                <ListItemText primary={gov.gov_role} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, width: 250 }}>
                    <InputLabel id="demo-multiple-checkbox-label">תפקיד בכנסת/חבר.ת בוועדה</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={filtername}
                        onChange={handleChange}
                        variant="standard"
                        // input={<OutlinedInput label="תפקיד בכנסת/חבר.ת בוועדה" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {knessetRole.map((ket) => (
                            <MenuItem className='menuitemselect' key={ket.id} value={ket.knesset_role}>
                                <Checkbox checked={filtername.indexOf(ket.knesset_role) > -1} />
                                <ListItemText primary={ket.knesset_role} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

        </div>
    )
}

