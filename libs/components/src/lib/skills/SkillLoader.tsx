import { Skeleton, Stack } from '@mui/material';
import { v4 } from 'uuid';

export const SkillLoader = () => {
    return (
        <Stack direction="column" alignItems="center" justifyContent="center">
            <Skeleton sx={{ fontSize: '1.5rem' }} animation="wave" variant="text" width={150} />
            <Skeleton animation="wave" variant="text" width={168} height={2} />
            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2} p={2}>
                {Array.from({ length: 6 }, () => v4()).map((id: string) => (
                    <Skeleton animation="wave" key={id} variant="rounded" width={100} height={32} />
                ))}
            </Stack>
        </Stack>
    );
};
