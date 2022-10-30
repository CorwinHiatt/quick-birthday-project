import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        
        
        <p>
         Hello Lea Lavon Hiatt 
        </p>
        <button className='b-day'>Press link Birthday Girl ⬇</button>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=oB46t1Eij0g"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <footer className='foot'>
        <h4 className='one'>Happy Birthday Too You...</h4>
        <h4 className='two'>Happy Birthday Too You...</h4>
        <h4 className='three'>Happy Birthday dear Lea ...</h4>
        <h4 className='four'>Happy Birthday Too You...</h4>
        <div className='pic-container' >
        </div> 
        </footer>
      
    </div>
  );
}

export default App;
