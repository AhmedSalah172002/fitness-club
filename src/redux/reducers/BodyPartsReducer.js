import { GET_ALL_BODYPARTLIST , GET_ERROR } from '../type'

const inital = {
    data: [],
    loading: true,
}
const BodyPartsReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_BODYPARTLIST:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                data: action.payload,
            }
        default:
            return state;
    }
}
export default BodyPartsReducer