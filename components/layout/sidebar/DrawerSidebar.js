import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Book, Dashboard, Event, Group, Hub, Settings, Storefront } from '@mui/icons-material';
import { Box, Divider, Drawer, List, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MenuSidebar from './MenuSidebar';
import { Scrollbar } from "react-scrollbars-custom";
import SingleMenu from './MenuItem';
// const drawerWidth = 250;

const menu_json = [
    {
        title: 'Dashboard',
        icon: <Dashboard />,
        uri: '/',
        list: null
    },
    {
        title: 'Kegiatan',
        icon: <Group />,
        list: [
            {
                title: 'Summary',
                uri: '/kegiatan/summary'
            },
            {
                title: 'Berlangsung',
                uri: '/kegiatan/berlangsung'
            },
            {
                title: 'Riwayat',
                uri: '/kegiatan/riwayat'
            }
        ]
    },
    {
        title: 'Event',
        icon: <Event />,
        list: [
            {
                title: 'Summary',
                uri: '/event/summary'
            },
            {
                title: 'Berlangsung',
                uri: '/event/berlangsung'
            },
            {
                title: 'Riwayat',
                uri: '/event/riwayat'
            }
        ]
    },
    {
        title: 'Merchant',
        icon: <Storefront />,
        list: [
            {
                title: 'Summary',
                uri: '/merchant/summary'
            },
            {
                title: 'Menunggu Persetujuan',
                uri: '/merchant/menunggu-persetujuan'
            },
            {
                title: 'Aktif',
                uri: '/merchant/aktif'
            },
            {
                title: 'Menunggu Respon Selanjutnya',
                uri: '/merchant/menunggu-respon-selanjutnya'
            }
        ]
    },
    {
        title: 'Sebaran Covid-19',
        icon: <Hub />,
        list: [
            {
                title: 'Summary',
                uri: '/sebaran-covid19/summary'
            },
            {
                title: 'Penanganan Per-Wilayah',
                uri: '/sebaran-covid19/berlangsung'
            }
        ]
    },
    {
        title: 'Pengaturan',
        icon: <Settings />,
        uri: '/',
        list: null
    },
    {
        title: 'Docs',
        icon: <Book />,
        uri: '/docs',
        list: null
    },
]

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

const DrawerSidebar = (props) => {
    const { open, drawerWidth } = props
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    backgroundColor: 'rgb(5, 30, 52)',
                    boxSizing: 'border-box',

                },
            }}
            variant="persistent"
            anchor="left"
            open={open}>
            {/* <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            <MenuIcon />
                        </IconButton>
                    </DrawerHeader> */}
            <Scrollbar>
                <Box sx={{
                    display: 'flex',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                }}>
                    <ThemeProvider
                        theme={createTheme({
                            components: {
                                MuiListItemButton: {
                                    defaultProps: {
                                        disableTouchRipple: true,
                                    },
                                },
                            },
                            palette: {
                                mode: 'dark',
                                primary: { main: 'rgb(102, 157, 246)' },
                                background: { paper: 'rgb(5, 30, 52)' },
                                // height: '100%'
                            },
                        })}>
                        <Paper
                            flex={1}
                            elevation={0}
                            sx={{
                                maxWidth: drawerWidth - 1,
                                borderRadius: 0,
                                // height: 'auto',
                                width: '100%',

                            }}>
                            <FireNav component="nav" disablePadding>
                                <DrawerHeader>
                                    <Image
                                        src="/logo.png"
                                        width={100}
                                        height={30}
                                    />

                                </DrawerHeader>
                                <Divider />
                                {
                                    menu_json.map((menu, kmenu) => {
                                        if (menu.list != null) {
                                            return (
                                                <MenuSidebar key={kmenu} listmenu={menu.list} title={menu.title} icon={menu.icon} />
                                            )
                                        } else {
                                            return (
                                                <SingleMenu key={kmenu} title={menu.title} icon={menu.icon} uri={menu.uri} />
                                            )
                                        }

                                    })
                                }
                            </FireNav>
                        </Paper>
                    </ThemeProvider>
                </Box>
            </Scrollbar>
        </Drawer>
    );
};

export default DrawerSidebar;