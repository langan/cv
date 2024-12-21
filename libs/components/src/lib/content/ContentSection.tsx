import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

interface ContentSectionProps {
    title: string;
    children: React.ReactNode;
}

export const ContentSection = ({ title, children }: ContentSectionProps) => {
    return (
        <Stack direction="column">
            <Typography variant="h4" component="h4">
                {title}
            </Typography>
            <Divider sx={{ border: '1px solid black', margin: '8px 0px' }} />
            {children}
        </Stack>
    );
};
