import { Home, Mail, PhoneIphone } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const ContactList = () => {
    return (
        <List sx={{ width: '100%' }}>
            <ListItem>
                <ListItemIcon sx={{ color: 'white', justifyContent: 'center' }}>
                    <PhoneIphone />
                </ListItemIcon>
                <ListItemText primary="+30 6934064744" />
            </ListItem>
            <ListItem>
                <ListItemIcon sx={{ color: 'white', justifyContent: 'center' }}>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary="mr.langan@gmail.com" />
            </ListItem>
            <ListItem>
                <ListItemIcon sx={{ color: 'white', justifyContent: 'center' }}>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Sitia, Crete, Greece" />
            </ListItem>
        </List>
    );
};
