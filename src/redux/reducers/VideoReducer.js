import { GET_ALL_VIDEOS, GET_ERROR } from '../type'


const inital = {
    videos: [],
    loading: true,
}
const ExercisesReducer = (state = inital, action) => {
    switch (action.type) {

        case GET_ALL_VIDEOS:
            return {
                ...state,
                videos: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                videos: action.payload,
            }
        default:
            return state;
    }
}
export default ExercisesReducer