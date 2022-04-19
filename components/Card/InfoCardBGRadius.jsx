import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const InfoCardBGRadius = (props) => {
    const { color, title, subtitle, total, ket } = props
    return (
        <Paper
            {...props}
            sx={{
                py: 3,
                px: 4,
                height: 170,
                borderRadius: 2,
                ...(color === 'pink' && {
                    background: 'linear-gradient(to right, rgb(244 114 182), rgb(251 207 232))'
                }),
                ...(color === 'yellow' && {
                    background: 'linear-gradient(to right, rgb(250 204 21), rgb(254 240 138))'
                }),
                ...(color === 'blue' && {
                    background: 'linear-gradient(to right, rgb(96 165 250), rgb(191 219 254))'
                }),
                ...(color === 'cyan' && {
                    background: 'linear-gradient(to right, rgb(34 211 238), rgb(165 243 252))'
                }),
                ...(color === 'green' && {
                    background: 'linear-gradient(to right, rgb(74 222 128), rgb(187 247 208))'
                }),
                ...(color === 'red' && {
                    background: 'linear-gradient(to right, rgb(248 113 113), rgb(254 202 202))'
                }),
                ...(color === 'purple' && {
                    background: 'linear-gradient(to right, rgb(192 132 252), rgb(233 213 255))'
                }),
                ...(color === 'rose' && {
                    background: 'linear-gradient(to right, rgb(251 113 133), rgb(254 205 211))'
                }),
                ...(color === 'lime' && {
                    background: 'linear-gradient(to right, rgb(163 230 53), rgb(217 249 157))'
                }),
                ...(color === 'gray' && {
                    background: 'linear-gradient(to right, rgb(156 163 175), rgb(229 231 235))'
                }),
            }}>
            <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {title}
            </Typography>
            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {subtitle}
            </Typography>

            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#fff', marginTop: 2 }}>
                {total}
            </Typography>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mt: 2.5 }}>
                <Box>
                    {/* <img src={'/icons/ic-vector.svg'} width={12} height={12} fill={'red'} style={{ color: '#fff', fill: 'red' }} />
                    <VectorIco width={30} height={30} fill='red' /> */}
                    <svg
                        class="inline" width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.33 20H14.12C13.6968 19.958 13.2979 19.7822 12.9814 19.498C12.6649 19.2139 12.4472 18.8363 12.36 18.42L9.68 5.99998L6.92 12.4C6.84193 12.5789 6.71323 12.731 6.54975 12.8376C6.38627 12.9442 6.19517 13.0007 6 13H3C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12C2 11.7348 2.10536 11.4804 2.29289 11.2929C2.48043 11.1053 2.73478 11 3 11H5.34L7.85 5.20998C8.01896 4.82144 8.30695 4.4966 8.67244 4.28229C9.03793 4.06798 9.46203 3.97528 9.88361 4.01755C10.3052 4.05982 10.7024 4.23487 11.0181 4.51748C11.3338 4.80008 11.5515 5.17563 11.64 5.58998L14.32 18L17.08 11.62C17.155 11.4374 17.2824 11.281 17.4461 11.1707C17.6099 11.0604 17.8026 11.001 18 11H21C21.2652 11 21.5196 11.1053 21.7071 11.2929C21.8946 11.4804 22 11.7348 22 12C22 12.2652 21.8946 12.5196 21.7071 12.7071C21.5196 12.8946 21.2652 13 21 13H18.66L16.15 18.79C15.9967 19.1465 15.7431 19.4507 15.4199 19.6656C15.0967 19.8804 14.718 19.9966 14.33 20Z" />
                    </svg>
                </Box>
                <Box>
                    <Typography variant="caption" component="div" sx={{ color: '#fff' }}>
                        {ket}
                    </Typography>
                </Box>
            </Stack>

        </Paper>
    );
};

export default InfoCardBGRadius;