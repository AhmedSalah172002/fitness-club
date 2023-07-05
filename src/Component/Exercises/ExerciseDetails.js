import React from 'react'
import { Container, Row } from 'react-bootstrap';
import bodyPartImage from "../../assets/images/body-part.png"
import targetImage from "../../assets/images/target.png"
import equipmentImage from "../../assets/images/equipment.png"


const ExerciseDetails = ({Exercise}) => {

    

  return (
    <>
       <div className="exercise-details mt-5 mb-5">
       <Container>
        <Row>
            <div className="col-lg-6 col-md-12">
             <div className="exercise-details-image mb-5">
              <img src={Exercise.gifUrl} alt="gif" />
             </div>
            </div>

            <div className="col-lg-6 col-md-12">
            <div className="exercise-details-text">
                <h2 >{Exercise.name}</h2>
                <div className="det mb-5">
                    <div className="det-img me-4">
                    <img src={bodyPartImage} alt="img" />
                    </div>
                    
                <p>{Exercise.bodyPart}</p>
                </div>
                <div className="det mb-5">
                <div className="det-img me-4">
                <img src={equipmentImage} alt="img" />
                </div>
                
                <p>{Exercise.equipment}</p>
                </div>
                <div className="det mb-5">
                <div className="det-img me-4">
                <img src={targetImage} alt="img" />
                </div>
                
                <p>{Exercise.target}</p>
                </div>
                
                
            </div>
            </div>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default ExerciseDetails