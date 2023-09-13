import logo from './assets/logo.png';
import back from './assets/back.jpg';
import front from './assets/front.png';
import losAngeles from './assets/los-angeles.png';
import losAngelesWhite from './assets/los-angeles-white.png';
import './App.css';
import History from './components/History';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <img src={logo} alt="Los Angeles Mountains" />
        </div>

        <div>
          <a href="#history">01. HISTORY</a>
          <a href="#team">02. TEAM</a>
        </div>
      </nav>

      <section className="hero">
        <img style={{position:'absolute'}} src={back} id="back" alt="" srcset="" />
        <h1 id="middle">
          LOSANGELES <span>MOUNTAINS</span>
        </h1>
        <img style={{position:'absolute'}} src={front} id="front" alt="" srcset="" />
      </section>

      <nav className="sticky-nav">
        <div>
          <img src={logo} alt="Los Angeles Mountains" id="first-logo" />
          <img src={losAngeles} alt="" srcset="" id='second-logo'/>
        </div>

        <div>
          <a href="#history">01. HISTORY</a>
          <a href="#team">02. TEAM</a>
        </div>
      </nav>

      <History />
      <Team />
      <footer>
        <div>
          <img src={logo} alt="Los Angeles Mountains" id="first-logo" />
          <img src={losAngelesWhite} alt="" srcset="" />
        </div>

        <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}

export default App;
