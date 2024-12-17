import { Chip, Stack } from '@mui/material';
import React from 'react';

export interface ChipItem {
    label: string;
    icon?: JSX.Element;
}

interface ChipListProps {
    chips: ChipItem[];
}

export const ChipList = ({ chips = [] }: ChipListProps) => {
    return (
        <Stack sx={{ bgcolor: 'primary.main' }} direction="row" flexWrap="wrap" justifyContent="center" gap={2} p={2}>
            {chips.map((chip, index) =>
                chip.icon ? (
                    <Chip key={index} label={chip.label} color="info" icon={chip.icon} />
                ) : (
                    <Chip key={index} label={chip.label} color="info" />
                )
            )}
        </Stack>
    );
};
