import './index.css'

const ImageItem = props => {
  const {ImageDetails, clickImageItem} = props
  const {id, imageUrl, thumbnailUrl, category} = ImageDetails

  const onClickingImage = () => {
    clickImageItem(imageUrl)
  }

  return (
    <li className="list-container">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="match-img"
        onClick={onClickingImage}
      />
    </li>
  )
}

export default ImageItem
