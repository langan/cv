'use client';
import { Box } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
    url: string;
}

export const QRCode = ({ url }: QRCodeProps) => {
    return (
        <Box pr={2}>
            <QRCodeSVG
                value={url}
                size={160}
                level="H"
                imageSettings={{
                    src: '/github.svg',
                    height: 34,
                    width: 34,
                    excavate: true
                }}
            />
        </Box>
    );
};
