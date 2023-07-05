import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { getAllBodyPartList } from '../../redux/actions/BodyPartsAction';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, A11y } from 'swiper/modules';
import gym from "../../assets/images/gym.png"
import 'swiper/css';
import 'swiper/css/pagination';
import { getAllExercises, getExercisesByBodyPart , getExercisesByName } from '../../redux/actions/ExercisesAction';


const BodyParts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBodyPartList());
    }, [])
    

    const BodyParts = useSelector(state => state.allBodyParts.data)
    const Loading = useSelector(state => state.allBodyParts.loading)

    const [name,setName] = useState("")

    const getAll=()=>{
        dispatch(getAllExercises())
    }
    const getByBodypart=(bodypart)=>{
        let ele = document.getElementById("result");   
        ele.scrollIntoView({ behavior: 'smooth' });
        dispatch(getExercisesByBodyPart(bodypart))
    }
    const getByName=(name)=>{
        document.querySelector(".searchTerm").value="";
        let ele = document.getElementById("result");   
        ele.scrollIntoView({ behavior: 'smooth' });
        dispatch(getExercisesByName(name))
        
    }

    return(
        <>
        <Container>
            <div className="mt-5 mb-5">
                <h2 className="text-center mb-4">Awesome Exercises You <br /> Should Know</h2>
                    <div className="search mt-5 mb-5">
                        <input type="text" onChange={(e)=>setName(e.target.value) } className="searchTerm" placeholder="Search" />
                        <button type="submit" onClick={()=>getByName(name)  } className="searchButton">Search</button>
                    </div>
            </div>
        </Container>
        <div className="BodyParts mt-5 mb-5" >
            <Container>
                { !Loading ? <Swiper
            modules={[ Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            
            pagination={{ clickable: true }}
            
            >
                <SwiperSlide className='mb-5' style={{cursor:"grab"}}>
                  <div className="Parts mt-3 mb-2" >
                      <div onClick={()=>getAll()} className="parts-image" style={{cursor:"pointer"}}>
                          <img  src={gym} alt="gym"/>
                      </div>
                      <p className='text-center'>All</p>
                  </div>
                </SwiperSlide>
                {BodyParts.map((e,i)=>{
                  return(  <SwiperSlide key={i} className='mb-5' style={{cursor:"grab"}}>
                  <div className="Parts mt-3 mb-2" >
                      <div onClick={()=>getByBodypart(e)} className="parts-image" style={{cursor:"pointer"}}>
                          <img  src={gym} alt="gym"/>
                      </div>
                      <p className='text-center'>{e}</p>
                  </div>
                </SwiperSlide>)
                })}
    </Swiper> :null }
            
            </Container>
        </div>
        </>
    )
}

export default BodyParts