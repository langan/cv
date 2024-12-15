'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    typography: {
        h1: {
            fontFamily: 'var(--font-monsterrat)'
        },
        fontFamily: 'var(--font-open-sans)'
    }
});

export default theme;
