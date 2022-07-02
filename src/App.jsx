import Places from './Places'
import data from './data'

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <img className='planet' src={require('./images/planet.png')} alt="" />
        <p>my travel journal.</p>
      </nav>
      <Places />
    </div>
  );
}

export default App;
