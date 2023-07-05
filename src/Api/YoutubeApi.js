import axios from 'axios'

const YoutubeUrl = axios.create({ baseURL: "https://youtube-search-and-download.p.rapidapi.com" , headers: {
  'X-RapidAPI-Key': '9df4a35b34mshad901633efad6c3p19bb07jsnd6c43fb923f6',
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}})

export default YoutubeUrl;