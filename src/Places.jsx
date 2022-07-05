
export default function Places(props) {
  return (
    <div className="places">
      <img className="location-photo" src={props.imageUrl} alt={props.title} />
      <div className="text-block">
        <div className="map-info">
          <img src={require('./images/pin.png')} alt="" />
          <p className="location">{props.location}</p>
          <a className='google-link' href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="title">{props.title}</h1>
        <h4 className="time-spent">{props.startDate} - {props.endDate}</h4>
        <p className="info">{props.description}</p>
      </div>
    </div>
  )
}
