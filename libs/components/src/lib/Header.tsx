'use client';
import { theme } from '@cv/theme';
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
                backgroundColor: theme.palette.secondary.main
            }}
            direction="row"
            alignItems="center"
            p={2}
        >
            <Stack direction="column">
                <Typography variant="h1" component="h1">
                    {name}
                </Typography>
                <Typography variant="h3" component="h3">
                    {jobTitle}
                </Typography>
            </Stack>
        </Stack>
    );
}
