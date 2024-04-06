
import axios from "axios";
 const BASE_URL ="https://youtube138.p.rapidapi.com"
 
const options = {
 
    
  params: {

    
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '772d48a733mshbe508de35fec217p1b21a3jsn7146443451cd',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataFromApi = async(url)=>{
  console.log("hello")
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    // const res = await fetch(`${BASE_URL}/${url}`,options)
    // const {data}= await res.json()
    console.log(data)
    return data;
}
