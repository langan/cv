import { SkillType } from '@cv/types';
import { Stack } from '@mui/material';
import { neon } from '@neondatabase/serverless';
import { Suspense } from 'react';
import { SkillLoader } from './SkillLoader';
import { SkillsList } from './SkillsList';

const getSkillTypes = async () => {
    if (!process.env['DATABASE_URL']) {
        console.error('DATABASE_URL is not defined');
    }
    const sql = neon(process.env['DATABASE_URL'] ?? '');
    const response = await sql`SELECT * FROM cv_skill_types;`;
    return response as SkillType[];
};

export const Skills = async () => {
    const types = await getSkillTypes();
    return (
        <Stack gap={4}>
            {types.map(type => (
                <Suspense fallback={<SkillLoader />}>
                    <SkillsList key={type.id} typeID={type.id} title={type.name} />
                </Suspense>
            ))}
        </Stack>
    );
};
