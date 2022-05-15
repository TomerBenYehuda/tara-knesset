import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function Headers({ searchValue, setSearchValue }) {

  const navigate = useNavigate()

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#184885',
            color: "white",
          },
        },
      },
    },
  });



  const goTo = (des) => {
    navigate('/' + des)
  }

  return (
    <div className='header'>
      <div className="d-flex">
        <Form >
          <FormControl
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }}
            type="search"
            placeholder="חיפוש מפלגה, חבר כנסת"
            value={searchValue}
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
      <div className='logo'>
        <h5 onClick={() => goTo("contactus")}>צור קשר</h5>
        <img className='logojo' src="https://i.ibb.co/HPpJqPp/logo.png" alt="logo" onClick={() => goTo("")} />
        <img className='logotara' src="https://i.ibb.co/KcZgHKm/1.png" alt="logo" onClick={() => goTo("")} />
      </div>

      <div className='formobileonly'>
        <React.Fragment>

          <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
          <ThemeProvider theme={theme}>

            <Drawer
              anchor={"right"}
              open={state}
              onClose={toggleDrawer(false)}
            >
              <img className='logojo' src="https://i.ibb.co/9TLp7sj/logo-1.png" alt="logo" onClick={() => goTo("")} />
              <img className='logotara' src="https://i.ibb.co/KcZgHKm/1.png" alt="logo" onClick={() => goTo("")} />
              <h5 onClick={() => goTo("contactus")}>צור קשר</h5>
            </Drawer>
          </ThemeProvider>
        </React.Fragment>
      </div>
    </div>
  )
}
