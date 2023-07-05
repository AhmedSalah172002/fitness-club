import { GET_ALL_EXERCISES , GET_EXERCISES_BY_BODYPART,GET_EXERCISES_BY_NAME,GET_EXERCISES_BY_ID,GET_EXERCISES_BY_TARGET,GET_EXERCISES_BY_EQUIPMENT, GET_ERROR } from '../type'

const getPages=(arr,arrlength)=>{
    let newarr=[];
    let k=0;
    for (let i = 1; i <= arrlength; i++) {
        let prearr=[]
        for (let j = k; j < 9*i+1; j++) {
            if(j-9*i==0)
            {
                k=9*i
                break
            }
            prearr.push(arr[j]);
        }
        newarr.push(prearr.filter(e=>typeof(e) != "undefined"));
    }
    return newarr
}

const inital = {
    data: [],
    loading: true,
    pageCount:0,
    pages:[],
}
const ExercisesReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_EXERCISES:
            return {
                ...state,
                data: action.payload,
                loading: false,
                pageCount:Math.ceil(action.payload.length/9),
                pages:getPages(action.payload,Math.ceil(action.payload.length/9))
            }
            case GET_EXERCISES_BY_BODYPART:
                return {
                    ...state,
                    data: action.payload,
                    loading: false,
                    pageCount:Math.ceil(action.payload.length/9),
                    pages:getPages(action.payload,Math.ceil(action.payload.length/9))
                }
                case GET_EXERCISES_BY_NAME:
                    return {
                        ...state,
                        data: action.payload,
                        loading: false,
                        pageCount:Math.ceil(action.payload.length/9),
                        pages:getPages(action.payload,Math.ceil(action.payload.length/9))
                    }
                    case GET_EXERCISES_BY_TARGET:
                        return {
                            ...state,
                            data: action.payload,
                            loading: false,
                        }
                        case GET_EXERCISES_BY_EQUIPMENT:
                            return {
                                ...state,
                                data: action.payload,
                                loading: false,
                            }
    

                    case GET_EXERCISES_BY_ID:
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
export default ExercisesReducer