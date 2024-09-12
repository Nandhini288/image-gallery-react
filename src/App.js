import dog1 from "./assets/images/dog1.png"
import dog2 from "./assets/images/dog2.png"
import dog3 from "./assets/images/dog3.png"
import dog4 from "./assets/images/dog4.png"
import dog5 from "./assets/images/dog5.png"
import dog6 from "./assets/images/dog6.png"
import dog7 from "./assets/images/dog7.png"
import dog8 from "./assets/images/dog8.png"
function App() {
  return (
    <div>
      <h1>Image-Gallery</h1>
      <div className="gallery">
        <div className="image">
          <img src={dog1} alt="dog" />
          <p>Jullie's Rabbit Ears</p>
        </div>
        <div className="image">
          <img src={dog2} alt="dog" />
          <p>The Smiley Kuttu</p>
        </div>
        <div className="image">
          <img src={dog3} alt="dog" />
          <p>The Innocent Look</p>
        </div>
        <div className="image">
          <img src={dog4} alt="dog" />
          <p>The Blacky Bunny</p>
        </div>
        <div className="image">
          <img src={dog5} alt="dog" />
          <p>Cutie Runny</p>
        </div>
        <div className="image">
          <img src={dog6} alt="dog" />
          <p>The Saint Doggy</p>
        </div>
        <div className="image">
          <img src={dog7} alt="dog" />
          <p>Whitey Doggy</p>
        </div>
        <div className="image">
          <img src={dog8} alt="dog" />
          <p>Mr.Rio</p>
        </div>
      </div>
    </div>
  );
}

export default App;
