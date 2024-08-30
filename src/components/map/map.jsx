import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './style';


const Map = () => {
const classes = useStyles();
const isMobile = useMediaQuery('(min-width:600px)'); // is set to false if the width of device is larger than 600px
const coordinates = { lat: 0, lng: 0}; // latitude and longitude

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAA28ob_CqrnYB47_zYA4vDrKXib5Ps4fY'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[25,25,25,25]}
                options={''}
                onChange={''}
                onChildClick={''}
                >
            </GoogleMapReact>
        </div>
    );
}

export default Map;