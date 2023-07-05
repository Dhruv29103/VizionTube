import axios from 'axios'
const BASE_URL='https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50'
// const BASE_URL='https://youtube-v31.p.rapidapi.com' 

// #########
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0b191e9f6mshfe59075f23931b7p1bbcaajsnc982a6d0bd6e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


// #########

// 
// const options = {
// 	method: 'GET',
// 	url: BASE_URL,
// 	params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
// 	headers: { 
// 	  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
// 	  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
//   };
  
export const fetchFromAPI = async(url)=>{
	const {data}=await axios.get(`${BASE_URL}/${url}`,options); 
	return data;  
}  




