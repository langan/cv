import { Stack } from '@mui/material';
import { v4 } from 'uuid';
import { SkillLoader } from './SkillLoader';

export const SkillsLoader = () => {
    return (
        <Stack gap={4}>
            {Array.from({ length: 4 }, () => v4()).map((id: string) => (
                <SkillLoader key={id} />
            ))}
        </Stack>
    );
};
