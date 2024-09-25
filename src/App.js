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
        <div className='gif-container'>
          <TikTok url="https://www.tiktok.com/@yuvng.dylan/video/7391143453159214379" />
          <TikTok url="https://www.tiktok.com/@chiefgreenscreens/video/7394985075521146155"  />
          <TikTok url="https://www.tiktok.com/@youlove.mitch/video/7391315321874943262" />
        </div>
        {/* <Description /> */}
        <Tokenomics />
      </div>
    </div>
  );
}

export default App;
