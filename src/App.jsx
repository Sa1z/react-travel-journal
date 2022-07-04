import Places from './Places'
import data from './data'


function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <img className='planet' src={require('./images/planet.png')} alt="" />
        <p>my travel journal.</p>
      </nav>
      <Places
      title={data[0].title}
      location={data[0].location}
      googleMapsUrl={data[0].googleMapsUrl}
      startDate={data[0].startDate}
      endDate={data[0].endDate}
      description={data[0].description}
      imageUrl={data[0].imageUrl}
       />
    </div>
  );
}


export default App;
