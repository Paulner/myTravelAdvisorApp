import React from "react";
import { CssBaseline, Grid} from "@mui/material";
 
//Css baseline allows us to style text on webpage

import Header from './components/header/header';
import MyList from './components/list/list';
import Map from './components/map/map';

const App = () => {
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