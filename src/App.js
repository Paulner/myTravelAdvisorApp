import React, {useState,useEffect} from "react";
import { CssBaseline, Grid} from "@mui/material"; //Css baseline allows us to style text on webpage

import { getPlacesData } from "./api";
import Header from './components/header/header';
import MyList from './components/list/list';
import Map from './components/map/map';

const App = () => {
    const [places, setPlaces] = useState([]);
    useEffect(()=>{
        getPlacesData()
        .then((data)=>{         // for promise handling
            console.log(data);
            setPlaces(data);
        })
    }, []); // empty dependency array at the end of the function call.. meaning the code inside block will happen only at the start of the application
    return(
        <div>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}> <MyList/> </Grid>
                <Grid item xs={12} md={8}> <Map/> </Grid>
            </Grid>
        </div>
    );
}

export default App;