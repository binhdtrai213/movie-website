import ErrorImage from '../assets/notfound.jpg';

export default function Error() {
  return (
    <div className="error-page">
        <img src={ErrorImage} alt="Error page" />
    </div>
  )
}
