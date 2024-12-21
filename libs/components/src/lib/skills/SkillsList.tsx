import { Skill } from '@cv/types';
import { Chip, Stack } from '@mui/material';
import { neon } from '@neondatabase/serverless';
import { IconFactory, SideBarContent } from '..';

async function getSkills(typeID: number) {
    if (!process.env['DATABASE_URL']) {
        console.error('DATABASE_URL is not defined');
    }
    const sql = neon(process.env['DATABASE_URL'] ?? '');
    const response = await sql`SELECT * FROM cv_skills WHERE type_id = ${typeID};`;
    console.log(response);
    return response as Skill[];
}

interface SkillListProps {
    typeID: number;
    title: string;
}

export const SkillsList = async ({ typeID, title }: SkillListProps) => {
    const skills = await getSkills(typeID);
    return (
        <SideBarContent title={title}>
            <Stack
                sx={{ bgcolor: 'primary.main' }}
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
                p={2}
            >
                {skills.map(skill => {
                    const icon = IconFactory(skill.name);
                    return icon ? (
                        <Chip key={skill.id} label={skill.name} color="secondary" icon={icon} />
                    ) : (
                        <Chip key={skill.id} label={skill.name} color="secondary" />
                    );
                })}
            </Stack>
        </SideBarContent>
    );
};
