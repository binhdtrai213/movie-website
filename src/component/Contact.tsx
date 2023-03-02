import React, { useState } from 'react'
import FacebookLogo from '../assets/facebook-logo.png'
import GmailLogo from '../assets/gmail-logo.png'
import TwitterLogo from '../assets/twitter-logo.png'
import InstagramLogo from '../assets/instagram-logo.png'
import { Button, FormControl, Grid, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Alert from '@mui/material/Alert'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isPopup, setIsPopup] = useState(false)

  const handleSend = () => {
    setIsPopup(true)
    setTimeout(() => {
      setIsPopup(false)
    }, 3000)
    setName('')
    setMessage('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <Grid container spacing={2} className="contact">
      <Grid item xs={6} spacing={2}>
        <div className="contact-media">
          <h3>Contact Us</h3>
          <a
            className="gmail media"
            href="https://www.facebook.com/DaoThienBinh/"
          >
            <img className="logo" src={FacebookLogo} alt="facebook logo" />
            <span>www.facebook.com/DaoThienBinh/</span>
          </a>
          <div className="p-2" />
          <a className="facebook media" href="https://www.gmail.com/">
            <img className="logo" src={GmailLogo} alt="gmail logo" />
            <span>www.gmail.com/</span>
          </a>
          <div className="p-2" />
          <a className="twitter media" href="https://twitter.com/?lang=en">
            <img className="logo" src={TwitterLogo} alt="twitter logo" />
            <span>twitter.com/?lang=en</span>
          </a>
          <div className="p-2" />
          <a className="instagram media" href="https://www.instagram.com/">
            <img className="logo" src={InstagramLogo} alt="instagram logo" />
            <span>www.instagram.com/</span>
          </a>
        </div>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth={true} className="form-control">
          <h3>Talk With Us</h3>
          <TextField
            id="outlined-controlled"
            label="Your Name"
            value={name}
            style={{ marginBottom: '20px' }}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value)
            }}
          />
          <TextField
            id="outlined-controlled"
            label="Your Email"
            value={email}
            style={{ marginBottom: '20px' }}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value)
            }}
          />
          <TextField
            id="outlined-controlled"
            label="User Phone"
            value={phone}
            style={{ marginBottom: '20px' }}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPhone(event.target.value)
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            value={message}
            style={{ marginBottom: '20px' }}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value)
            }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            style={{ width: '50%', margin: '0 auto' }}
            onClick={() => {
              handleSend()
            }}
          >
            Send
          </Button>
        </FormControl>
      </Grid>
      {isPopup && (
        <Alert severity="success" className="popup">
          Your message will send to US soon! ❤️
        </Alert>
      )}
    </Grid>
    //   {/* <img className='col-5' src={CameraImg} alt="Camera" /> */}
  )
}
