import { theme } from '@cv/theme';
import {
    mdiAws,
    mdiFirebase,
    mdiGoogleCloud,
    mdiLanguageCss3,
    mdiLanguageHtml5,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiMicrosoftAzure,
    mdiNodejs,
    mdiReact
} from '@mdi/js';

import Icon from '@mdi/react';
import Stack from '@mui/material/Stack';
import { ChipItem, ChipList } from './ChipList';
import { ContactList } from './ContactList';
import { SideMenuContent } from './SideMenuSection';

const backgroundColor = theme.palette.primary.main;

export const SideMenu = () => {
    const skills: ChipItem[] = [
        { label: 'Node.js', icon: <Icon path={mdiNodejs} size={1} color="white" /> },
        { label: 'React', icon: <Icon path={mdiReact} size={1} color="white" /> },
        { label: 'TypeScript', icon: <Icon path={mdiLanguageTypescript} size={1} color="white" /> },
        { label: 'JavaScript', icon: <Icon path={mdiLanguageJavascript} size={1} color="white" /> },
        { label: 'HTML', icon: <Icon path={mdiLanguageHtml5} size={1} color="white" /> },
        { label: 'CSS', icon: <Icon path={mdiLanguageCss3} size={1} color="white" /> }
    ];
    const frameworks: ChipItem[] = [
        { label: 'NestJS' },
        { label: 'Nx' },
        { label: 'Next.js' },
        { label: 'Jest' },
        { label: 'Express' },
        { label: 'SQL' },
        { label: 'NoSQL' },
        { label: 'Kubernetes' },
        { label: 'Docker' },
        { label: 'Helm' }
    ];
    const knowledge: ChipItem[] = [
        { label: 'Agile' },
        { label: 'TDD' },
        { label: 'CI/CD' },
        { label: 'Git' },
        { label: 'Scrum' },
        { label: 'Jira' },
        { label: 'SOLID' },
        { label: 'API Design' },
        { label: 'Microservices' }
    ];
    const cloud: ChipItem[] = [
        { label: 'AWS', icon: <Icon path={mdiAws} size={1} color="white" /> },
        { label: 'Azure', icon: <Icon path={mdiMicrosoftAzure} size={1} color="white" /> },
        { label: 'GCP', icon: <Icon path={mdiGoogleCloud} size={1} color="white" /> },
        { label: 'Firebase', icon: <Icon path={mdiFirebase} size={1} color="white" /> }
    ];
    return (
        <Stack
            sx={{
                backgroundColor: backgroundColor,
                color: theme.palette.getContrastText(backgroundColor),
                height: '100%'
            }}
            direction="column"
            py={2}
            gap={1}
        >
            <SideMenuContent title="Contact">
                <ContactList />
            </SideMenuContent>
            <SideMenuContent title="Skills">
                <ChipList chips={skills} />
            </SideMenuContent>
            <SideMenuContent title="Frameworks">
                <ChipList chips={frameworks} />
            </SideMenuContent>
            <SideMenuContent title="Knowledge">
                <ChipList chips={knowledge} />
            </SideMenuContent>
            <SideMenuContent title="Cloud">
                <ChipList chips={cloud} />
            </SideMenuContent>
        </Stack>
    );
};
