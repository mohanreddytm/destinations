import './index.css'

const DestinationItems = props => {
  const {items} = props
  const {name, imgUrl} = items
  return (
    <li className="container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationItems
