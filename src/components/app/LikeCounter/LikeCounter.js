import { useState, useEffect } from 'react';
import './LikeCounter.css';

function LikeCounter({ title, description, count, color}) {

  const [likes, setLikes] = useState(+count);

  useEffect(() => {
    if (likes === 0) {
      document.title = "minifeed - licznik lików";
    } else {
      document.title = `(${likes}) nowe lajki na minifeed`;
    }
  }, [likes]);

useEffect(() => {
  console.log("useefect odpalony");
 
}, [likes]);
 
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
    <div className='post' style={{backgroundColor: color}}>
      <p style={cos}> liczba lików {likes}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='actions'>
      <button onClick={handleLike} style={{marginRight: "100px"}}>polub ❤️</button>
      <button onClick={negatyw}>odlub ❤️</button>
    </div></div>
  );
}

export default LikeCounter;
 
