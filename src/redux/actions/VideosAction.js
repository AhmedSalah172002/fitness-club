import { GET_ALL_VIDEOS, GET_ERROR  } from '../type'
import useGetVideos from '../../hooks/useGetVideos'


    export const getAllVideos  = (name) => async (dispatch) => {
        try {
            const response = await useGetVideos(`/search?query=${name} exercise`);
            dispatch({
                type: GET_ALL_VIDEOS,
                payload: response,
            })
    
        } catch (e) {
            dispatch({
                type: GET_ERROR,
                payload: "Error " + e,
            })
        }
    }
