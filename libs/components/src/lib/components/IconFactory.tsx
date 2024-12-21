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
import React from 'react';

export const IconFactory = (icon: string) => {
    switch (icon) {
        case 'Node.js':
            return <Icon path={mdiNodejs} size={1} />;
        case 'React':
            return <Icon path={mdiReact} size={1} />;
        case 'TypeScript':
            return <Icon path={mdiLanguageTypescript} size={1} />;
        case 'JavaScript':
            return <Icon path={mdiLanguageJavascript} size={1} />;
        case 'HTML':
            return <Icon path={mdiLanguageHtml5} size={1} />;
        case 'CSS':
            return <Icon path={mdiLanguageCss3} size={1} />;
        case 'AWS':
            return <Icon path={mdiAws} size={1} />;
        case 'Azure':
            return <Icon path={mdiMicrosoftAzure} size={1} />;
        case 'GCP':
            return <Icon path={mdiGoogleCloud} size={1} />;
        case 'Firebase':
            return <Icon path={mdiFirebase} size={1} />;
        default:
            return null;
    }
};
