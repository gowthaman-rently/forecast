import axios from "axios";

const RapidAPIConnect = async(method, url, params)=>{

    const options = {
        method: method,
        url: url,
        params: params,
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    const resp = await axios.request(options);
    if(resp.status === 200)
    {   
        return resp.data;
    }
    else{
        return resp.error;
    }
}

export default RapidAPIConnect;