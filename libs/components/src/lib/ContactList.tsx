import { Home, Mail, PhoneIphone } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

export const ContactList = () => {
    return (
        <List sx={{ width: '100%', bgcolor: 'primary.main' }}>
            <ListItemButton>
                <ListItemIcon>
                    <PhoneIphone color="secondary" />
                </ListItemIcon>
                <ListItemText primary="+30 6934064744" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Mail color="secondary" />
                </ListItemIcon>
                <ListItemText primary="mr.langan@gmail.com" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Home color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Sitia, Crete, Greece" />
            </ListItemButton>
        </List>
    );
};
