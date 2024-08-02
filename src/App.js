
import './App.css';

import ImageSlider from './components/Image-Slider';

function App() {

  const images = [
    {
      id:1,
      src: "https://img.freepik.com/free-vector/hindu-festival-diwali-sale-banner-with-glowing-diya-yellow-background_1017-39772.jpg?t=st=1722578025~exp=1722581625~hmac=ba52ae59a7da08f7619899064c56d7d11e2c097ac25c3fa1d0f304641061b80e&w=1060"
    },

    {
      id:2,
      src: "https://img.freepik.com/free-vector/traditional-happy-dussehra-banner-design_1017-33993.jpg?t=st=1722501813~exp=1722505413~hmac=7dc9951e1e81fd66f209b8c4af185e4b649e1aa686dfe8c29b2c99ac0fab2799&w=1060"
    },

    {
      id:3,
      src:"https://img.freepik.com/free-vector/raksha-bandhan-sale-banner-with-golden-rakhi_1017-32977.jpg?t=st=1722501985~exp=1722505585~hmac=99ae2ce736f4a2ec597caafcc0416bd53363778f69f5b452eb133cec3894b91b&w=1060"
    },

    

  ]
  return (
    <div>
      <ImageSlider images={images} interval={3000}/>
    </div>
    
  );
}

export default App;
