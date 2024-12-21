import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

interface HeaderProps {
    name: string;
    jobTitle: string;
}

export function Header({ name, jobTitle }: HeaderProps) {
    return (
        <Stack
            sx={{
                backgroundColor: 'secondary.main',
                boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.2)'
            }}
            direction="row"
            alignItems="center"
            py={2}
            px={4}
        >
            <Stack direction="column">
                <Typography variant="h1" component="h1" color="white">
                    {name}
                </Typography>
                <Typography variant="h3" component="h3" color="white">
                    {jobTitle}
                </Typography>
            </Stack>
        </Stack>
    );
}
