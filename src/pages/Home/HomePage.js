import React from "react";
import LandPage from "../../Component/Home/LandPage";
import Advertisment from "../../Component/Home/Advertisment";
import BodyParts from "../../Component/Home/BodyParts";
import ExercisesResult from "../../Component/Home/ExercisesResult";

import Zoom from "react-reveal/Zoom";

const HomePage = () => {
  return (
    <>
      <div className="home mt-5">
        <Zoom>
          <LandPage />
        </Zoom>
        <Zoom>
          <Advertisment />
        </Zoom>
        <Zoom>
          <BodyParts />
        </Zoom>
        <Zoom>
          <ExercisesResult />
        </Zoom>
      </div>
    </>
  );
};

export default HomePage;
