import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { getAllVideos } from '../../redux/actions/VideosAction';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const YoutubeData = ({Exercise}) => {
    const dispatch = useDispatch();
    const [data,setData]=useState([])
    useEffect(() => {
        dispatch( getAllVideos(Exercise.name))
    }, [Exercise])
    
    const videos = useSelector(state => state.allVideos.videos).contents
    useEffect(() => {
        if (videos && videos.length > 0) {
          setData(videos.filter((e,i)=> i < 10));
        }
      }, [videos]);
    
   

  return (
    <>
    <div className="youtube mt-5 mb-5">
    <Container>
        <div className="head-title mt-3 mb-5">
            <h2>Watch <span>{Exercise.name}</span> Exercise Videps</h2>
        </div>
        <div className="videos mt-5 mb-5">
        <Swiper
            modules={[ Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            
            pagination={{ clickable: true }}
            
            >
              
              {
                data.map((e,i)=>(
                    <SwiperSlide className='mb-5' style={{cursor:"grab"}}>
                    <div className="video">
                    <div className="poster mb-3">
                                <img src={e.video.thumbnails[0].url} className="img-fluid" alt="img" />
                            </div>
                        <a href={`https://www.youtube.com/watch?v=${e.video.videoId}`} target="_blank" >
                            <h5>{e.video.title}</h5>
                        </a>
                    </div>
                    </SwiperSlide>
                )
            
                )
        }
                
    </Swiper>
        </div>
    </Container>
    </div>
    </>
  )
}

export default YoutubeData




