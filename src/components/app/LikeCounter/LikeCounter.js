import { useState } from 'react';
import './LikeCounter.css';

function LikeCounter() {

  const [likes, setLikes] = useState(0);

 
  const handleLike = () => {
    setLikes(likes + 1);
  };
  const negatyw = () => {
    if (likes < 1) {
       
    }
    setLikes(likes - 1);

  }; 
   const cos = {
    color: likes > 5 ? "red" : "black",
  };


  return (
    <div className='post'>
      <p style={cos}>fajny post!!! liczba lików {likes}</p>
      <div className='actions'>
      <button onClick={handleLike} style={{marginRight: "100px"}}>polub ❤️</button>
      <button onClick={negatyw}>odlub ❤️</button>
    </div></div>
  );
}

export default LikeCounter;
