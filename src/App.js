import './App.css';
import { TikTok } from "react-tiktok";
import Marquee from './components/ScrollingMarquee.jsx';
import michi from './assets/michi.png';
import Title from './components/Title.jsx';
// import Iframe from './components/Iframe.jsx';
import Description from './components/Description.jsx';
import Navebar from './components/Navbar.jsx';
import Tokenomics from './components/Tokenomics.jsx';

function App() {
  return(
    <div className='bg'>
      <div className='layout'>
        <Marquee />
        <Navebar className='navbar' />
        <Title  />
        <TikTok url="https://www.tiktok.com/@yuvng.dylan/video/7391143453159214379" />
        <Description />
        <Tokenomics />
      </div>
    </div>
  );
}

export default App;
