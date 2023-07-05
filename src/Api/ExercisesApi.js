import axios from 'axios'

const baseUrl = axios.create({ baseURL: "https://exercisedb.p.rapidapi.com" ,   headers: {
  'X-RapidAPI-Key': '9df4a35b34mshad901633efad6c3p19bb07jsnd6c43fb923f6',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}})

export default baseUrl;