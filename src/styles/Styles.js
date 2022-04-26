import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: [
                {
                    root: {
                        borderRadius: '20px',
                    },
                },
            ],
        },
    },
})


theme.typography.h5 = {
    fontSize: '2rem',
    fontFamily: 'Heebo',
    fontWeight: 700,
    fontStyle: 'normal',
    lineHeight: "162%"
};

theme.typography.body2 = {
    fontSize: '1.375rem',
    fontFamily: 'Heebo',
    fontWeight: 500,
    fontStyle: 'normal',
    lineHeight: "162%",
    color: "#184885",
    textAlign: "right"
};


export default theme;
