'use client';
import { AvatarHeader, CVContent, Header, SideMenu } from '@cv/components';
import { theme } from '@cv/theme';
import { Container, Grid2, Paper, Stack } from '@mui/material';

export default function Index() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.tailwind file.
     */
    return (
        <Container
            sx={{
                height: '100%'
            }}
        >
            <Paper elevation={2}>
                <Stack direction="column">
                    <Grid2 container>
                        <Grid2 sx={{ backgroundColor: theme.palette.primary.main, height: '32px' }} size={3}></Grid2>
                        <Grid2 size={9}></Grid2>
                        <Grid2 size={3}>
                            <AvatarHeader avatar="/avatar.png" />
                        </Grid2>
                        <Grid2 size={9}>
                            <Header name="John Langan" jobTitle="Full Stack Engineer" />
                        </Grid2>
                        <Grid2 sx={{ backgroundColor: 'pink' }} size={3}>
                            <SideMenu />
                        </Grid2>
                        <Grid2 size={9}>
                            <CVContent />
                        </Grid2>
                    </Grid2>
                </Stack>
            </Paper>
        </Container>
    );
}
