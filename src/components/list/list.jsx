import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl,Select } from "@material-ui/core";

import PlaceDetails from '../placeDetails/placeDetails';

import useStyles from './style';

const MyList = ( {places} ) => {
    const classes = useStyles();
    const [type, setType] = useState('');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants, Hotels, and Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=> setType(e.target.value)}> {/* setType sets the value of menuitem*/}
                    <MenuItem value='restaurants'> Restaurants </MenuItem>
                    <MenuItem value='hotels'> Hotels </MenuItem>
                    <MenuItem value='attractions'> Attractions </MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                    <MenuItem value={0}> All </MenuItem>
                    <MenuItem value={3}> Above 3.0 </MenuItem>
                    <MenuItem value={4}> Above 4.0 </MenuItem>
                    <MenuItem value={4.5}> Above 4.5 </MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={2} className={classes.list}>{/**  only if you have places then it will be mapped the places */}
                {places?.map((place,i) =>  (     
                    <Grid item key={i} xs={12}>   
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default MyList;