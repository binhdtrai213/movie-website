import CameraImg from '../assets/camera2.png';
import FacebookLogo from '../assets/facebook-logo.png';
import GmailLogo from '../assets/gmail-logo.png';
import TwitterLogo from '../assets/twitter-logo.png';
import InstagramLogo from '../assets/instagram-logo.png';

export default function Contact() {
  return (
    <div className='contact row w-100'>
      <div className='contact-media col-5'>
        <h3>Contact Us</h3>
        <a className='gmail media' href='https://www.facebook.com/DaoThienBinh/'>
          <img className='logo' src={FacebookLogo} alt='facebook logo' /> 
          <span>https://www.facebook.com/DaoThienBinh/</span>
        </a>
        <div className='p-2'/>
        <a className='facebook media' href='https://www.gmail.com/'>
          <img className='logo' src={GmailLogo} alt='gmail logo' />
          <span>https://www.gmail.com/</span>
        </a>
        <div className='p-2'/>
        <a className='twitter media' href='https://twitter.com/?lang=en' >
          <img className='logo' src={TwitterLogo} alt='twitter logo' />
          <span>https://twitter.com/?lang=en</span>
        </a>
        <div className='p-2'/>
        <a className='instagram media' href='https://www.instagram.com/'>
          <img className='logo' src={InstagramLogo} alt='instagram logo' />
          <span>https://www.instagram.com/</span>
        </a>
      </div>
      <img className='col-5' src={CameraImg} alt="Camera" />
    </div>
  )
}
