'use client';
import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const sizes = {
    headerHeight: '10vh',
    sideMenuWidth: '20vw'
};

export const theme = createTheme({
    cssVariables: true,
    typography: {
        h1: {
            fontFamily: 'var(--font-monsterrat)',
            fontSize: '3rem'
        },
        h3: {
            fontFamily: 'var(--font-open-sans)',
            fontSize: '2rem',
            fontWeight: 300
        },
        h4: {
            fontFamily: 'var(--font-open-sans)',
            fontSize: '1.5rem',
            fontWeight: 400
        },
        h5: {
            fontFamily: 'var(--font-open-sans)',
            fontSize: '1.5rem',
            fontWeight: 500,
            textTransform: 'uppercase'
        },
        fontFamily: 'var(--font-open-sans)'
    },
    palette: {
        primary: {
            main: colors.blueGrey['700']
        },
        secondary: {
            main: colors.grey['300']
        }
    }
});
