import React from "react";
import { Box, Typography, Button, Link, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';

const PlaceDetails = ({place}) => {
    console.log(place)
    const classes = useStyles();

    return (
        <Card elevator={6}>
            <CardMedia 
            style={{height:300}}
            image={place.photo ? place.photo.images.large.url : "https://www.google.com/url?sa=i&url=https%3A%2F%2F1080motion.com%2Fjump-start-1080%2F&psig=AOvVaw2UUr2A-_Px98xqmpbqJQhz&ust=1725557046761000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNinxojnqYgDFQAAAAAdAAAAABAJ" } // if no image is found, default image will load
            title={place.name}
            />

            <CardContent>
                <Link gutterBottom variant = "h5" color= "black" style= {{cursor: 'pointer'}} onClick={() => window.open(place.website, '_blank')}>{place.name}</Link>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.cuisine?.map(({name}) => (
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                ))}
                {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}> {/* opens new tab to place's tripadvisor link */}
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}> {/* */}
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;