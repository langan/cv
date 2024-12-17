import { mdiSnake, mdiWordpress } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Phone } from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import React from 'react';

export const CVTimeline = () => {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.1
                }
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent sx={{ mt: '14px' }} align="right" variant="body2" color="text.secondary">
                    2018 - Present
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <Phone />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        <b>Gamma Telecoms</b> / Lead Fullstack Engineer
                    </Typography>
                    <Typography variant="body2" textTransform="uppercase">
                        Hybrid Remote, Manchester, UK
                    </Typography>
                    <Typography pt={1}>
                        Team leader on several telecoms projects, worked closeley with developers, designers and testers
                        to create new products. This involved creating software architecture solutions, guiding team
                        members, ensuring adequate testing and deployment to AWS Kubernetes stack. Implemented many new
                        ideas such as moving to monorepo structure and CDK infrastructure deployment.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent sx={{ mt: '14px' }} variant="body2" color="text.secondary">
                    2006 - 2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <Icon path={mdiWordpress} size={1} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        <b>Oxygenna</b> / CTO and Founder
                    </Typography>
                    <Typography variant="body2" textTransform="uppercase">
                        Sitia, Crete, Greece
                    </Typography>
                    <Typography pt={1}>
                        Founded Oxygenna in Greece with a Greek friend creating WordPress themes. Achieved power elite
                        status on Themeforest before branching out to start a consulting service for UK companies such
                        as JD Sports, SuperDry and Discovery channel. Every developer that worked for us is now a team
                        lead or higher.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent sx={{ mt: '14px' }} variant="body2" color="text.secondary">
                    2000 - 2006
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <Icon path={mdiSnake} size={1} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        <b>Nokia</b> / Games Developer
                    </Typography>
                    <Typography variant="body2" textTransform="uppercase">
                        Manchester, UK
                    </Typography>
                    <Typography pt={1}>
                        Started my career as an embedded C and Java engineer creating games for Nokia 3310 and other
                        models. Worked on several games including Snake2, Pairs, Space Impact and Pinball.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};
