import React from 'react'
import { Container, Row } from 'react-bootstrap'
import banner from "../../assets/images/banner.png"

const LandPage = () => {
  return (
    <>
    <div className="land mt-5 mb-5">
        <Container>
            <Row>
                <div className="col-lg-6 col-md-12">
                    <div className="land-text mb-5 py-5">
                        <h4>Fitness Club</h4>
                        <h2>Sweat, Smile<br />And Repeat</h2>
                        <p>Check out the most effective exercises personalized to you</p>
                        <a href="#result">Explore Exercises</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="land-image">
                        <img src={banner} alt="banner" className="img-fluid" />
                    </div>
                </div>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default LandPage