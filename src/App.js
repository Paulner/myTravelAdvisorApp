import React, {useState, useEffect} from "react";
import { CssBaseline, Grid} from "@mui/material"; //Css baseline allows us to style text on webpage

import { getPlacesData } from "./api";
import Header from './components/header/header';
import MyList from './components/list/list';
import Map from './components/map/map';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates,setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);

    useEffect(()=>{         //allows us to fetch current latitude and longitude coordinates of the user's geolocation as soon as page is loaded.
        navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}})=>{
            setCoordinates({lat:latitude, lng:longitude});
        })
    }, []);


    useEffect(()=>{
        console.log('Coordinates: ', coordinates, bounds);
        if (bounds){                            // checks if bounds is null 
        getPlacesData(bounds.sw, bounds.ne)
        .then((data)=>{         // for promise handling 
            console.log(data);
            setPlaces(data);
            
        })
    }
    }, [coordinates, bounds]); // empty dependency array at the end of the function call.. meaning the code inside block will happen only at the start of the application
    return(
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}> 
                    <MyList places={places}/> {/* puts name of places on our list on frontend*/}
                </Grid>
                    
                <Grid item xs={12} md={8}> 
                    <Map
                        setCoordinates= {setCoordinates}
                        setBounds= {setBounds}
                        coordinates = {coordinates}
                    /> 
                </Grid>
            </Grid>
        </div>
    );
}

export default App;