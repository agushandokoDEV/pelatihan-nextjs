import React from 'react';
import { Circle, Dashboard, Dns, Drafts, FiberManualRecord, KeyboardArrowDown, People, PermMedia, Public } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import Router from 'next/router';
import SingleMenu from './MenuItem';

const MenuSidebar = (props) => {
    const { listmenu, title, icon } = props

    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <Box
            sx={{
                bgcolor: openMenu ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: 0,
                borderBottom: '1px dotted rgba(255, 255, 255, 0.12);'
            }}>
            <ListItemButton
                // alignItems="flex-start"
                onClick={() => setOpenMenu(!openMenu)}
                sx={{
                    px: 3,
                    py: 1.5,
                    borderBottom: '0.1px dotted rgba(255, 255, 255, 0.12);',
                    // '&:hover, &:focus': { '& svg': { opacity: openMenu ? 1 : 0 } },
                    '&:hover': {
                        backgroundColor: '#3F69EB'
                    }
                }}>
                <ListItemIcon>
                    {/* <Drafts /> */}
                    {icon}
                </ListItemIcon>
                <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '2px',
                    }}
                // secondary="tes"
                // secondaryTypographyProps={{
                //     noWrap: true,
                //     fontSize: 12,
                //     lineHeight: '16px',
                //     color: openMenu ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                // }}
                // sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                    sx={{
                        mr: -1,
                        opacity: 1,
                        transform: openMenu ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                    }}
                />
            </ListItemButton>
            {openMenu &&
                listmenu.map((menu, kitem) => (
                    <SingleMenu key={kitem} title={menu.title} uri={menu.uri} />
                ))}
        </Box>
    );
};

export default MenuSidebar;