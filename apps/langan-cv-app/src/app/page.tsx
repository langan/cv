import { AvatarHeader, CVContent, Header, SideBar } from '@cv/components';
import { Container, Grid2, Paper, Stack } from '@mui/material';

export default function Index() {
    return (
        <Container
            sx={{
                height: '100%'
            }}
        >
            <Paper elevation={2}>
                <Stack direction="column">
                    <Grid2 container>
                        <Grid2 sx={{ backgroundColor: 'primary.main', height: '32px' }} size={3}></Grid2>
                        <Grid2 size={9}></Grid2>
                        <Grid2 size={3}>
                            <AvatarHeader avatar="/avatar.png" />
                        </Grid2>
                        <Grid2 size={9}>
                            <Header name="John Langan" jobTitle="Full Stack Engineer" />
                        </Grid2>
                        <Grid2 size={3}>
                            <SideBar />
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
