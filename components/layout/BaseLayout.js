import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreIcon from '@mui/icons-material/MoreVert';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import Head from 'next/head';
import { alpha, Avatar, Box, InputBase, Badge, Menu, MenuItem, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import Image from 'next/image';
import DraftsIcon from '@mui/icons-material/Drafts';

const drawerWidth = 250;

const data = [
    { icon: <People />, label: 'Authentication' },
    { icon: <Dns />, label: 'Database' },
    { icon: <PermMedia />, label: 'Storage' },
    { icon: <Public />, label: 'Hosting' },
];

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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 50,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    backgroundColor: '#F6FAFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    '&:hover': {
        // backgroundColor: alpha(theme.palette.common.black, 0.25),
        // backgroundColor: 'blue',
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        color: '#808080',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // backgroundColor: 'red',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const _onLogout = () => {
    console.log('_onLogout')
}


const BaseLayout = (props) => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [openMenu, setOpenMenu] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openAnchor = Boolean(anchorEl);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const router = useRouter();
    // const { auth } = useSelector(state => state);

    // useEffect(() => {
    //     if (!auth.isLogin) {
    //         console.log('LOGOUT');
    //         router.replace('/login')
    //     }
    // }, [auth])

    const { children, maxwidth } = props;
    return (
        <React.Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content='belajar nextjs' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" open={open} sx={{ backgroundColor: '#fff' }}>
                    <Toolbar>
                        <IconButton
                            // color="inherit"
                            aria-label="open drawer"
                            onClick={() => setOpen(!open)}
                            edge="start"
                            // sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {/* TITLE Navbar */}
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: '#808080' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show 4 new mails"
                                sx={{ color: '#3F69EB' }}
                            // color="inherit"
                            >
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                sx={{ color: '#3F69EB' }}
                            // color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                disableRipple={true}
                                onClick={(event) => setAnchorEl(event.currentTarget)}
                                sx={{
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent'
                                    }
                                }}>
                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                                    <Avatar alt="Remy Sharp" src="/avatar-default.png" sx={{ width: 30, height: 30 }} />
                                    <Typography variant='body2' component='h6'>Agus Prio Handoko</Typography>
                                    <MoreIcon />
                                </Stack>
                            </IconButton>
                            {/* <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={openAnchor ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openAnchor ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                            </Tooltip> */}
                        </Box>

                    </Toolbar>
                </AppBar>

                {/* Menu dropdown profile */}
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openAnchor}
                    onClose={() => setAnchorEl(null)}
                    onClick={() => setAnchorEl(null)}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <MenuItem onClick={() => router.push('/account')}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={() => router.push('/account/dashboard')}>
                        <Avatar /> Dashboard
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={_onLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            // boxSizing: 'border-box',
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
                    <Box sx={{ display: 'flex' }}>
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
                                },
                            })}>
                            <Paper
                                flex={1}
                                elevation={0}
                                sx={{
                                    maxWidth: drawerWidth - 1,
                                    borderRadius: 0,
                                    height: '100vh',
                                    width: '100%'
                                }}>
                                <FireNav component="nav" disablePadding>
                                    <DrawerHeader>
                                        <Image
                                            src="/logo.png"
                                            width={100}
                                            height={30}
                                        />
                                        {/* <ListItemButton
                                            component="div"
                                            href="#customized-list"
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }}>
                                            <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                                            <ListItemText
                                                sx={{ my: 0 }}
                                                primary="Firebash"
                                                primaryTypographyProps={{
                                                    fontSize: 20,
                                                    fontWeight: 'medium',
                                                    letterSpacing: 0,
                                                }}
                                            />
                                        </ListItemButton> */}
                                        {/* <IconButton onClick={handleDrawerClose}>
                                            <MenuIcon />
                                        </IconButton> */}
                                    </DrawerHeader>

                                    <Divider />
                                    <ListItemButton sx={{ borderBottom: '0.1px dotted rgba(255, 255, 255, 0.12);' }}>
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Drafts" />
                                    </ListItemButton>
                                    <Box
                                        sx={{
                                            bgcolor: openMenu ? 'rgba(71, 98, 130, 0.2)' : null,
                                            pb: openMenu ? 2 : 0,
                                            borderBottom: '1px dotted rgba(255, 255, 255, 0.12);'
                                        }}>
                                        <ListItemButton
                                            alignItems="flex-start"
                                            onClick={() => setOpenMenu(!openMenu)}
                                            sx={{
                                                px: 3,
                                                pt: 2.5,
                                                pb: openMenu ? 0 : 2.5,
                                                '&:hover, &:focus': { '& svg': { opacity: openMenu ? 1 : 0 } },
                                            }}>
                                            <ListItemText
                                                primary="Build"
                                                primaryTypographyProps={{
                                                    fontSize: 15,
                                                    fontWeight: 'medium',
                                                    lineHeight: '20px',
                                                    mb: '2px',
                                                }}
                                                secondary="tes"
                                                secondaryTypographyProps={{
                                                    noWrap: true,
                                                    fontSize: 12,
                                                    lineHeight: '16px',
                                                    color: openMenu ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                                }}
                                                sx={{ my: 0 }}
                                            />
                                            <KeyboardArrowDown
                                                sx={{
                                                    mr: -1,
                                                    opacity: 0,
                                                    transform: openMenu ? 'rotate(-180deg)' : 'rotate(0)',
                                                    transition: '0.2s',
                                                }}
                                            />
                                        </ListItemButton>
                                        {openMenu &&
                                            data.map((item) => (
                                                <ListItemButton
                                                    key={item.label}
                                                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                                >
                                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.label}
                                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                                    />
                                                </ListItemButton>
                                            ))}

                                    </Box>

                                </FireNav>
                            </Paper>
                        </ThemeProvider>
                    </Box>

                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    {children}
                </Main>
            </Box>
        </React.Fragment>
    );
};

BaseLayout.defaultProps = {
    maxWidth: 'lg'
}

export default BaseLayout;