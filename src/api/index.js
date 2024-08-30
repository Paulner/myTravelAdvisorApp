import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-key': '64ed85fd6dmsh0763cf1087d4b6fp1f5378jsn16972d67d5f8',
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
  };
export const getPlacesData = async () => {
    try{
        const {data:{data}} = await axios.get(URL, options); // 'await' pauses operations until 'axios.get()' sends a get request to the URL and retrieves data such as status code and other information
        return data;
    } catch (error){
        console.log(error)
    }
}