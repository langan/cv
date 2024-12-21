import { Stack, Typography } from '@mui/material';
import { CVTimeline } from './CVTimeline';
import { ContentSection } from './ContentSection';
import { QRCode } from '../components';

export const CVContent = () => {
    return (
        <Stack sx={{ height: '100%' }} direction="column" gap={4} p={4}>
            <ContentSection title="Overview">
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
            </ContentSection>
            <ContentSection title="Portfolio">
                <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
                    <Stack direction="column" gap={2}>
                        <Typography variant="body1">
                            This CV was created by me, using Next.js and Material UI, it runs in an Nx monorepo and has
                            CI deployment configured as an example of my work, you can find the source code on GitHub.
                        </Typography>
                        <Typography variant="body1">
                            Scan the QR code to view the source code and see more of my work on GitHub.
                        </Typography>
                    </Stack>
                    <QRCode url="https://github.com/langan/cv" />
                </Stack>
            </ContentSection>
            <ContentSection title="Experience">
                <CVTimeline />
            </ContentSection>
            <ContentSection title="Education">
                <Stack direction="row" justifyContent="center" gap={5}>
                    <Stack direction="column">
                        <Typography variant="h6" fontWeight="bold">
                            Holy Cross College, Bury, UK
                        </Typography>
                        <ul>
                            <li>A Level Computer Science</li>
                            <li>A Level Mathematics</li>
                            <li>A Level Business Studies</li>
                        </ul>
                    </Stack>
                    <Stack direction="column">
                        <Typography variant="h6" fontWeight="bold">
                            Salford University, UK
                        </Typography>
                        <ul>
                            <li>MSc Computer Science</li>
                        </ul>
                    </Stack>
                </Stack>
            </ContentSection>
        </Stack>
    );
};
