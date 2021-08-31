import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles'


const Header = ({ setCoordinates }) => {

    const classes = useStyles();
    const [autocomplete, setAutoComplete] = useState([]);

    const onLoad = (autoC) =>  setAutoComplete(autoC);
    
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
    }
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title1}>
                    Traveller
                </Typography>
                <Box  className={classes.inputBox} >
                    <Typography variant="h6" className={classes.title2}>
                        Explore new Places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} className={classes.autocomplete}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputInput }} className={classes.input} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
