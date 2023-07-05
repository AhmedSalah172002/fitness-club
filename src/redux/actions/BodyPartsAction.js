import { GET_ALL_BODYPARTLIST, GET_ERROR  } from '../type'
import useGetData from '../../hooks/useGetData'

//get all BodyPartList 
export const getAllBodyPartList = () => async (dispatch) => {
    try {
        const response = await useGetData(`/exercises/bodyPartList`);
        dispatch({
            type: GET_ALL_BODYPARTLIST,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


