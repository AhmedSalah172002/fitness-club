import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getExercisesId } from '../../redux/actions/ExercisesAction';
import ExerciseDetails from '../../Component/Exercises/ExerciseDetails'
import YoutubeData from '../../Component/Exercises/YoutubeData';

const ExercisesPage = () => {
    
  const params=useParams()
    const ID=params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExercisesId(ID));
    }, [])

    const Exercise = useSelector(state => state.allExercises.data)
    const Loading = useSelector(state => state.allExercises.loading)
    

    return (
    <>
    <ExerciseDetails Exercise={Exercise} />
    <YoutubeData Exercise={Exercise} Loading={Loading} />


    </>
  )
}

export default ExercisesPage
