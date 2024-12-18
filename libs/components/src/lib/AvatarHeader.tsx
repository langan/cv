import { theme } from '@cv/theme';
import { Avatar, Stack } from '@mui/material';

interface AvatarHeaderProps {
    avatar: string;
}

export const AvatarHeader = ({ avatar }: AvatarHeaderProps) => {
    const avatarOutline = `8px solid ${theme.palette.primary.main}`;
    return (
        <Stack
            sx={{
                height: '100%',
                background: 'linear-gradient(90deg, rgba(0,131,143,1) 30%, rgba(84,110,122,1) 100%)'
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar sx={{ width: 100, height: 100 }} alt="John Langan" src={avatar} />
        </Stack>
    );
};
