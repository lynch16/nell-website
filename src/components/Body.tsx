import * as React from "react";
import MothersDay from "components/MothersDay";
import Song from "components/Song";

const Body: React.FC = () => {

  return (
    <>
      {/* <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">Happy Mothers Day</span>
      </nav> */}
      <Song />
      <MothersDay />

      {/* <nav>
        <div className="nav nav-tabs mt-2" id="nav-tab" role="tablist">
          <a 
            className="nav-item nav-link active" 
            id="mainTab" 
            data-toggle="tab" 
            href="#main" 
            role="tab" 
            aria-controls="main" 
            aria-selected="true"
          >
            About
          </a>
          <a 
            className="nav-item nav-link" 
            id="mothersDayTab" 
            data-toggle="tab" 
            href="#mothersDay" 
            role="tab" 
            aria-controls="mothersDay" 
            aria-selected="true"
          >
            Happy Mothers Day
          </a>
        </div>
      </nav>
      <div className="tab-content mt-2" id="nav-tabContent">
        <div 
          className="tab-pane fade" 
          id="main" 
          role="tabpanel" 
          aria-labelledby="nav-home-tab"
        >
        </div>
        <div 
          className="tab-pane fade" 
          id="mothersDay" 
          role="tabpanel" 
          aria-labelledby="nav-home-tab"
        >
          Happy Mothers Day
        </div>
      </div> */}
    </>
  )
};

export default Body;
