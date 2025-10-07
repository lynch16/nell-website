import * as  React from "react";
import Pictures from "components/Pictures";

const MothersDay: React.FC = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-10">
        <div className="card">
          <div className="card-body" style={{ fontSize: "20px" }}>
            <Pictures />
            <h2 className="card-title mt-4 text-center">Happy Mother's Day!</h2>
            <p className="card-text">
              Happy Mother's Day to this wonderful mom and grandma!
            </p>
            <p>
              We're so thankful to have you in our lives. For anyone stumbling on this site that doesn't know Nell, here are some quick facts:
            </p>
            <ul>
              <li>She has the best, loud and contagious laugh. You can always pick her out of a crowd, not because she's tall, she's not, but because of this most recognizable quality.</li>
              <li>There's never a dull moment when she's around. She hosts the best parties and will always agree to ride all the rollercoasters at Disneyland</li>
              <li>She always know the location of the nearest Macy's. It's like a super power.</li>
              <li>She's the Kween of Kohl's cash.</li>
              <li>A casserole enthusiast.</li>
              <li>Golfin' Grandma extraordinaire.</li>
              <li>Never met a 7 and 7 she didn't like. Even the ones that are a little too sweet.</li>
            </ul>
            <br />

            <p>Happy Mother's Day! We love you!</p>
            
            <p>Love,

              <br />
              Will and Jenna
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MothersDay;
