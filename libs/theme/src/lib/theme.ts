'use client';
import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const sizes = {
    headerHeight: '10vh',
    sideMenuWidth: '20vw'
};

export const theme = createTheme({
    defaultColorScheme: 'light',
    colorSchemes: { light: true },
    cssVariables: true,
    typography: {
        h1: {
            fontFamily: 'var(--font-monsterrat)',
            fontSize: '3rem',
            fontWeight: 500
        },
        h3: {
            fontFamily: 'var(--font-open-sans)',
            fontSize: '1.5rem',
            fontWeight: 300
        },
        h4: {
            fontFamily: 'var(--font-monsterrat)',
            fontSize: '1.5rem',
            fontWeight: 400
        },
        h5: {
            fontFamily: 'var(--font-monsterrat)',
            fontSize: '1.5rem',
            fontWeight: 400
        },
        fontFamily: 'var(--font-open-sans)'
    },
    palette: {
        background: {
            default: '#2E3B4E',
            paper: colors.common.white
        },
        primary: {
            main: colors.cyan['800']
        },
        secondary: {
            main: colors.blueGrey['600']
        }
    }
});
