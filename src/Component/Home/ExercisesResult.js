import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { getAllExercises } from '../../redux/actions/ExercisesAction';
import Pagination from "../utility/Pagination"
import { Link } from "react-router-dom"

const ExercisesResult = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllExercises());
    }, [])

    const Exercises = useSelector(state => state.allExercises)
    const Loading = useSelector(state => state.allExercises.loading)
    const pageCount=useSelector(state => state.allExercises.pageCount)
    const pages=useSelector(state => state.allExercises.pages)

    const [data,setData]=useState([])
    
    useEffect(() => {
        if (pages && pages.length > 0) {
          setData(pages.filter((e,i)=> i == 0));
        }
      }, [pages]);

    const getPage = (page) => {
        setData(pages.filter((e,i)=> i == page))
    }
  return (
    <>
        <Container>
        <div id='result' className="results mt-5 mb-5">
            <h2 className="mb-5">Showing Results :</h2>
            <Row>
               {
                (!Loading && data.length>0 ? data[0].map((e,i)=>{
                    return(
                        <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                            <Link onClick={()=>window.scroll(0,0)} to={`/${e.id}`}>
                            <div className="exercise mb-5">
                            <img src={e.gifUrl} alt="gif" />
                            <div className="details">
                                <p className="one me-3">{e.bodyPart}</p>
                                <p className="two">{e.target}</p>
                            </div>
                            <h4>{e.name}</h4>
                        </div>
                                </Link> 
                        
                    </div>
                    )
                }) : null)
               }
            </Row>
            {
                pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
            }
        </div>
        </Container>
    </>
  )
}

export default ExercisesResult