import './App.css';
import Image_Slider from './components/Image_Slider';
import MySlider from './components/MySlider'
import Slick_carousel from './components/Slick_carousel';

function App() {
  return (
    <div className="App">
     <Image_Slider />
     {/* <Slick_carousel /> */}
     <MySlider />
    </div>
  );
}

export default App;
