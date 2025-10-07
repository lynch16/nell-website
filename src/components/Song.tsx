import * as React from "react";

import song from "../assets/music/every_woman.mp3";

const Song: React.FC = () => {
  
  return (
    <audio src={song} autoPlay={true} controls>
      <p>If you are reading this, it is because your browser does not support the audio element.     </p>
      <embed src={song} width="180" height="90" hidden={true} />
    </audio>
  )
}
export default Song;
