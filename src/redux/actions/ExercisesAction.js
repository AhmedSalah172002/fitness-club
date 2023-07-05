import { GET_ALL_EXERCISES,GET_EXERCISES_BY_BODYPART,
    GET_EXERCISES_BY_NAME,GET_EXERCISES_BY_ID,GET_EXERCISES_BY_TARGET,
    GET_EXERCISES_BY_EQUIPMENT,GET_ERROR  } from '../type'
import useGetData from '../../hooks/useGetData'

//get all Exercises 
export const getAllExercises  = () => async (dispatch) => {
    try {
        const response = await useGetData(`/exercises`);
        dispatch({
            type: GET_ALL_EXERCISES,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
//get Exercises By BodyPart
export const getExercisesByBodyPart = (BodyPart) => async (dispatch) => {
    try {
        const response = await useGetData(`/exercises/bodyPart/${BodyPart}`);
        dispatch({
            type: GET_EXERCISES_BY_BODYPART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

    //get Exercises By name
export const getExercisesByName = (name) => async (dispatch) => {
    try {
        const response = await useGetData(`/exercises/name/${name}`);
        dispatch({
            type: GET_EXERCISES_BY_NAME,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


    //get Exercises By Id
    export const getExercisesId = (id) => async (dispatch) => {
        try {
            const response = await useGetData(`/exercises/exercise/${id}`);
            dispatch({
                type: GET_EXERCISES_BY_ID,
                payload: response,
            })
    
        } catch (e) {
            dispatch({
                type: GET_ERROR,
                payload: "Error " + e,
            })
        }
    }
    

        //get Exercises By Id
        export const getExercisesByTarget = (Target) => async (dispatch) => {
            try {
                const response = await useGetData(`/exercises/target/${Target}`);
                dispatch({
                    type: GET_EXERCISES_BY_TARGET,
                    payload: response,
                })
        
            } catch (e) {
                dispatch({
                    type: GET_ERROR,
                    payload: "Error " + e,
                })
            }
        }


            //get Exercises By Id
    export const getExercisesByEquipment = (equipment) => async (dispatch) => {
        try {
            const response = await useGetData(`/exercises/equipment/${equipment}`);
            dispatch({
                type: GET_EXERCISES_BY_EQUIPMENT,
                payload: response,
            })
    
        } catch (e) {
            dispatch({
                type: GET_ERROR,
                payload: "Error " + e,
            })
        }
    }
 