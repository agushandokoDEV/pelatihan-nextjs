import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import Head from 'next/head';
import { alpha, Avatar, Box, InputBase, Badge, Menu, MenuItem, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DrawerSidebar from './sidebar/DrawerSidebar';

const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        backgroundColor: '#F6FAFF',
        // minHeight: 300,
        flexGrow: 1,
        padding: theme.spacing(2),
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

    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openAnchor = Boolean(anchorEl);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const router = useRouter();
    // const { auth } = useSelector(state => state);

    // useEffect(() => {
    //     if (!auth.isLogin) {
    //         console.log('LOGOUT');
    //         router.replace('/login')
    //     }
    // }, [auth])

    const { children } = props;
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
                <DrawerSidebar open={open} drawerWidth={drawerWidth} />
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