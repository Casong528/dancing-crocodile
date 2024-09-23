import './App.css';
import michi from './assets/michi.png';
import Title from './components/Title.jsx';
import Description from './components/Description.jsx';
import Navebar from './components/Navbar.jsx';
import Tokenomics from './components/Tokenomics.jsx';

function App() {
  return(
    <div className='bg'>
      <div className='layout'>
        <Navebar className='navbar' />
        <Title  />
        <img src={michi} alt='' className='pfp'/>
        <Description />
        <Tokenomics />
      </div>
    </div>

  
  );
}

export default App;
