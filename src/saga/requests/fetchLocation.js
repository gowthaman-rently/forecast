import RapidAPIConnect from "../../components/rapidConnect";

async function fetchLocation(){
    const locationURL = window.location.toString().split("/")[3];
    return RapidAPIConnect("GET","https://weatherapi-com.p.rapidapi.com/forecast.json",{q: locationURL, days: '3'})
    .then( resp=>resp )
    .catch( error=>{throw error})
}

export default fetchLocation;