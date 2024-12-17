import { theme } from '@cv/theme';
import { Avatar, Stack } from '@mui/material';
import React from 'react';

interface AvatarHeaderProps {
    avatar: string;
}

export const AvatarHeader = ({ avatar }: AvatarHeaderProps) => {
    const avatarOutline = `8px solid ${theme.palette.primary.main}`;
    return (
        <Stack
            sx={{
                height: '100%',
                backgroundColor: 'secondary.main'
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar sx={{ outline: avatarOutline, width: 96, height: 96 }} alt="John Langan" src={avatar} />
        </Stack>
    );
};
