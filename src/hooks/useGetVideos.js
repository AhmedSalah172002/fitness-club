import YoutubeUrl from '../Api/YoutubeApi'

const useGetVideos = async (url, parmas) => {
    const res = await YoutubeUrl.get(url, parmas);
    return res.data;
}


export default useGetVideos;