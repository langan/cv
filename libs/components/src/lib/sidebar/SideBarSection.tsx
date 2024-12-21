import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

interface SideBarContentProps {
    title: string;
    children: React.ReactNode;
}

export const SideBarContent = ({ title, children }: SideBarContentProps) => {
    return (
        <Stack>
            <Stack direction="row" alignItems="center" justifyContent="center">
                <Typography variant="h5" component="h5">
                    {title}
                </Typography>
            </Stack>
            <Divider
                sx={{ marginLeft: '60px', marginRight: '60px', marginTop: '8px', marginBottom: '4px' }}
                variant="middle"
                style={{ borderColor: 'white' }}
            />
            {children}
        </Stack>
    );
};
