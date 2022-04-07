import MainLayout from '@/components/layout/MainLayout';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, IconButton, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { AUTH_LOGIN_ACTIONS } from '@/store/actions/authActions';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { connect, useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const Login = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);
    const [showPassword, SETshowPassword] = useState(false);
    const [formdata, setFormData] = useState({
        username: '',
        password: ''
    })

    // console.log(auth)

    useEffect(() => {
        // console.log(formdata)
        // function checkLogin() {
        //     // console.log(field)
        //     // dispatch(
        //     //     AUTH_LOGIN_ACTIONS(formdata)
        //     // )
        //     // if (auth.authenticated) {
        //     //     router.replace('/')
        //     // }
        // }
        // checkLogin()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const UserLoginSchema = Yup.object().shape({
        username: Yup.string().required('Username Required'),
        password: Yup.string().required('Password Required'),
    });

    const _onLogin = (field) => {
        // console.log(field)
        dispatch(
            AUTH_LOGIN_ACTIONS(field)
        )
    }

    return (
        <MainLayout title="Login">
            <Box sx={{ padding: { md: 2 } }}>
                <Grid container sx={{ justifyContent: 'center', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                    <Grid item md={6} xs={12}>
                        <Box
                            sx={{
                                background: 'linear-gradient(180deg, #f6faff 0%, rgba(246, 250, 255, 0) 100%);',
                                padding: 4,
                                borderRadius: { md: 3 }
                            }}>
                            <Box
                                component="img"
                                srcSet='data:image/png;base64,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'
                                sx={{
                                    width: 200,
                                    height: 50
                                }}>

                            </Box>
                            <Typography variant='h5' color={grey[600]}>
                                Make your life more easier with us
                            </Typography>
                            <Box
                                component="img"
                                srcSet='/media/img/il-login.6e837ccf.png'
                                layout='responsive'
                                objectFit='cover'
                                sx={{ width: '100%', height: { md: 440 } }}
                            >
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ padding: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                            <Button variant="contained" sx={{ borderRadius: 5 }}>
                                <PersonOutlineOutlinedIcon fontSize="small" /> &nbsp; Join Us
                            </Button>
                        </Box>
                        <Box sx={{ px: { md: 10 } }}>
                            <Typography variant='h3'>
                                👋
                            </Typography>
                            <Typography variant='h3' sx={{ fontWeight: 700, color: grey[700] }}>
                                Halo,
                            </Typography>
                            <Typography variant='h3' sx={{ fontWeight: 700, color: grey[700] }}>
                                Selamat Datang!
                            </Typography>
                            <Box sx={{ my: 2 }}>
                                <Typography variant='p' sx={{ color: grey[700] }}>
                                    Silakan mengisi username dan password di bawah
                                </Typography>
                            </Box>
                            <Formik
                                initialValues={
                                    {
                                        username: 'super_admin@abcabc.com',
                                        password: '12345',
                                        fcm: "98h32f98h32f9832hf"
                                    }
                                }
                                enableReinitialize={true}
                                // initialValues={UserReducer}
                                validationSchema={UserLoginSchema}
                                onSubmit={(value, action) => _onLogin(value)}>
                                {({ handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values }) => (
                                    <Box component='form' sx={{ mt: 3 }} autoComplete='off' noValidate>
                                        <TextField
                                            fullWidth={true}
                                            // label="Outlined"
                                            variant="outlined"
                                            label={errors.username ? errors.username : 'Username or Email'}
                                            margin='dense'
                                            onChange={handleChange('username')}
                                            value={values.username}
                                            error={errors.username && touched.username}
                                            // helperText={errors.email}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            fullWidth={true}
                                            label={errors.password ? errors.password : 'Password'}
                                            margin='dense'
                                            onChange={handleChange('password')}
                                            value={values.password}
                                            error={errors.password && touched.password}
                                            // helperText={errors.password}
                                            type={showPassword ? 'text' : 'password'}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            InputProps={{
                                                endAdornment: <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => SETshowPassword(!showPassword)}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>,
                                            }}
                                        />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <Box>
                                                <FormControlLabel
                                                    control={<Checkbox value="remember" color="primary" />}
                                                    label='Ingatkan Saya'
                                                />
                                            </Box>
                                            <Box sx={{ mt: 1.5 }}>
                                                <Link href='/login'>
                                                    <a>Lupa Pasword?</a>
                                                    {/* <Box component='a'>
                                                        Lupa Pasword?
                                                    </Box> */}
                                                </Link>
                                            </Box>
                                        </Box>

                                        <LoadingButton
                                            fullWidth
                                            loading={auth.loading}
                                            variant="contained"
                                            onClick={handleSubmit}
                                            sx={{
                                                // backgroundColor: orange[900],
                                                borderRadius: 10,
                                                height: 50,
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                // color: '#fff',
                                                marginTop: 1,
                                                // mb: 2,
                                                '&:hover': {
                                                    // backgroundColor: orange[800]
                                                }
                                            }}>
                                            Masuk &nbsp; <LoginIcon />
                                        </LoadingButton>
                                    </Box>
                                )}
                            </Formik>
                            {auth.error}
                            <Box rowSpacing={1} sx={{ mt: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Box sx={{ width: '100%' }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            borderRadius: 5,
                                            background: blue[50],
                                            height: 50,
                                        }}>
                                        <Typography
                                            variant='b'
                                            sx={{
                                                color: 'blue',
                                                fontWeight: 800,
                                                '&:hover': {
                                                    color: '#fff'
                                                }
                                            }}>
                                            Kebijakan Privasi
                                        </Typography>
                                    </Button>
                                </Box>
                                <Box>&nbsp;&nbsp;</Box>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        borderRadius: 5,
                                        background: blue[50],
                                        height: 50,
                                    }}>
                                    <Typography
                                        variant='b'
                                        sx={{
                                            color: 'blue',
                                            fontWeight: 800,
                                            '&:hover': {
                                                color: '#fff'
                                            }
                                        }}>
                                        Syarat Pengguna
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </MainLayout>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { AUTH_LOGIN_ACTIONS })(Login);;