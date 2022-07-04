
export default function Places(props) {
  return (
    <div className="places">
      <img className="location-photo" src={props.imageUrl} alt={props.title} />
      <div className="country">
        <img src='' alt="" />
        <p className="location">{props.location}</p>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
      </div>
      <h1 className="title">{props.title}</h1>
      <br />
      <h4 className="time-spent">{props.startDate} - {props.endDate}</h4>
      <p className="info">{props.description}</p>
    </div>
  )
}
