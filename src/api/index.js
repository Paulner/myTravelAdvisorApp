import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (sw, ne) => {
    try{
        const {data:{data}} = await axios.get(URL, {
          params: {             //gets info of nearby places based on map's current location
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-key': '64ed85fd6dmsh0763cf1087d4b6fp1f5378jsn16972d67d5f8',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
        }); // 'await' pauses operations until 'axios.get()' sends a get request to the URL and retrieves data such as status code and other information
        return data;
    } catch (error){
        console.log(error)
    }
}