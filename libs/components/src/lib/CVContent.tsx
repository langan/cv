import { Stack, Typography } from '@mui/material';
import { CVTimeline } from './CVTimeline';
import { PageSection } from './PageSection';

export const CVContent = () => {
    return (
        <Stack sx={{ height: '100%' }} direction="column" gap={4} p={2}>
            <PageSection title="Overview">
                <Stack direction="column" gap={2}>
                    <Typography variant="body1">
                        Highly skilled and innovative Full Stack Developer with over 10 years of experience crafting
                        robust backend architectures and intuitive frontend interfaces. Passionate about building
                        scalable, maintainable, and well-tested solutions that drive user satisfaction and business
                        success.
                    </Typography>
                    <Typography variant="body1">
                        Thrives in collaborative environments, working alongside talented developers to produce clean,
                        readable, and eﬃcient code. Adept at adopting emerging technologies and best practices to
                        deliver elegant solutions for complex challenges.
                    </Typography>
                </Stack>
            </PageSection>
            <PageSection title="Experience">
                <CVTimeline />
            </PageSection>
        </Stack>
    );
};
