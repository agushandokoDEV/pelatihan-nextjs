import { Box } from '@mui/material';
import Head from 'next/head';
import React, { Fragment } from 'react';

const MainLayout = (props) => {
    const { children } = props;
    return (
        <Fragment>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content='belajar nextjs' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                {children}
            </Box>
        </Fragment>
    );
};

export default MainLayout;