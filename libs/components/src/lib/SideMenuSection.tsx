import { Stack, Typography } from '@mui/material';

interface SideMenuContentProps {
    title: string;
    children: React.ReactNode;
}

export const SideMenuContent = ({ title, children }: SideMenuContentProps) => {
    return (
        <Stack sx={{ height: '100%' }}>
            <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography variant="h5" component="h5">
                    {title}
                </Typography>
            </Stack>
            {children}
        </Stack>
    );
};
