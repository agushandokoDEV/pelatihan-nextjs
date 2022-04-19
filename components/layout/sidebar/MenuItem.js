import { FiberManualRecord } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Router from 'next/router';
import React from 'react';

const SingleMenu = (props) => {
    const { title, icon, uri } = props
    return (
        <ListItemButton
            onClick={() => Router.push(uri)}
            sx={{
                borderBottom: '0.1px dotted rgba(255, 255, 255, 0.12);',
                py: 1.5, minHeight: 32, color: 'rgba(255,255,255,.8)',
                '&:hover': {
                    backgroundColor: '#3F69EB'
                }
            }}>
            <ListItemIcon>
                {
                    icon ?
                        icon
                        :
                        <FiberManualRecord fontSize='small' />
                }
            </ListItemIcon>
            {
                icon ?
                    <ListItemText
                        primary={title}
                    // primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                    :
                    <ListItemText
                        primary={title}
                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
            }

        </ListItemButton>
    );
};

{/* <ListItemButton
                        key={item.kitem}
                        sx={{
                            py: 1.5, minHeight: 32, color: 'rgba(255,255,255,.8)',
                            '&:hover': {
                                backgroundColor: '#3F69EB'
                            }
                        }}
                        onClick={() => Router.push(item.uri)}>
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            
                        </ListItemIcon>
                        <ListItemText
                            primary={item.title}
                            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                        />
                    </ListItemButton> */}
export default SingleMenu;