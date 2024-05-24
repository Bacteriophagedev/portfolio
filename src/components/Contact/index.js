import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_oqazehl', 'template_x73ikqa', refForm.current, 'xVr6i0zgC9CTz4kuk')
          .then(
            () => {
              alert('Message sent successfully!')
              window.location.reload(false)
            },
            () => {
              alert('Message failed to send!, Please try again later.')
            },
          );
      };

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass = {letterClass} 
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>
                   I'm open to amaizing opportuinities - especially ambitious or large projects. However, if you have other request or questions, don't hesistate to contact me using the form below. 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Japhet Kolawole <br />
                Nigeria <br />
                9, Peace Avenue, Olubondu-Majiyagbe, Ipaja <br />
                Alimosho, Lagos <br />
                <span>kolawolejaph121@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[6.612477, 3.243527]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[6.612477, 3.243527]}>
                        <Popup>Japhet lives here, come over for a drink!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>)
}

export default Contact