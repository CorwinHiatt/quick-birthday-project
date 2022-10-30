import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello <code></code> Lea Lavon Hiatt 
        </p>
        <button className='b-day'>Press Birthday Girl ⬇</button>
        <a
          className="App-link"
          href="https://www.google.com/search?q=Happy+33rd+Birthday&tbm=isch&ved=2ahUKEwi8j4_S64b7AhV5wCkDHbQlBPsQ2-cCegQIABAA&oq=Happy+33rd+Birthday&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAELEDEEM6BAgAEEM6BggAEAcQHjoICAAQgAQQsQNQ1QhY8zNg-jtoAHAAeACAAU6IAbEGkgECMTKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=mNhdY7zjOfmAp8kPtMuQ2A8&bih=795&biw=500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
