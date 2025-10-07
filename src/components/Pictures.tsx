import * as React from "react";
import MyImage from '../assets/images/00100dPORTRAIT_00100_BURST20181224180149089_COVER.jpg';
import MyImage2 from '../assets/images/xmas.jpg';
import Image3 from "../assets/images/IMG_5043.jpg";
import Image4 from "../assets/images/IMG_5061.jpg";
import Image5 from "../assets/images/rehearsal.jpg";
import Image6 from "../assets/images/MVIMG_20171125_191756.jpg";
import Image7 from "../assets/images/jenna-will-613.jpg";
import Image8 from "../assets/images/IMG950063.jpg";
import Image9 from "../assets/images/IMG952591.jpg";
import Image10 from "../assets/images/IMG953839.jpg";
import Image11 from "../assets/images/IMG_0462.jpg";

const Pictures: React.FC = () => {

  return (
    <div id="images" className="carousel slide" data-ride="carousel" data-wrap="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={MyImage} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={MyImage2} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image3} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image4} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image5} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image6} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image7} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image8} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image9} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image10} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={Image11} />
        </div>
      </div>
      <a className="carousel-control-prev text-dark" href="#images" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#images" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Pictures;

