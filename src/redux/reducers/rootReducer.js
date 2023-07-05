import { combineReducers } from 'redux'
import BodyPartsReducer from './BodyPartsReducer'
import ExercisesReducer from './ExercisesReducer'
import VideoReducer from './VideoReducer'

export default combineReducers({
    allBodyParts: BodyPartsReducer,
    allExercises:ExercisesReducer,
    allVideos: VideoReducer,
})