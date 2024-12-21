/// <reference types="react/experimental" />
import Stack from '@mui/material/Stack';
import { Suspense } from 'react';
import { Skills, SkillsLoader } from '../skills';
import { ContactList } from './ContactList';
import { SideBarContent } from './SideBarSection';

export const SideBar = () => {
    return (
        <Stack
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100%'
            }}
            direction="column"
            gap={4}
            py={4}
        >
            <SideBarContent title="Contact">
                <ContactList />
            </SideBarContent>
            <Suspense fallback={<SkillsLoader />}>
                <Skills />
            </Suspense>
        </Stack>
    );
};
