import Places from './Places'
import data from './data'


function App() {
  const placesData = data.map((dataArr, index) => {
    return <Places 
    title={dataArr.title}
    location={dataArr.location}
    googleMapsUrl={dataArr.googleMapsUrl}
    startDate={dataArr.startDate}
    endDate={dataArr.endDate}
    description={dataArr.description}
    imageUrl={dataArr.imageUrl}
    style={index + 1 !== data.length ? {borderBottom: '1px solid #F5F5F5', display: 'flex', paddingTop: 36} : {display: 'flex', paddingTop: 36}}
     />
  })
  return (
    <div className="App">
      <nav className='nav-bar'>
        <img className='planet' src={require('./images/planet.png')} alt="" />
        <p>my travel journal.</p>
      </nav>
      {placesData}
    </div>
  );
}


export default App;
