import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'J', 'a', 'p', 'h', 'e', 't'];
    const roleArray = ['A', ' ', 'F', 'u', 'l', 'l', '-', 'S', 't', 'a', 'c', 'k', ' ',  'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, [])
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> 
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                     <br />
                     <span className={`${letterClass} _12`}>I</span>
                     <span className={`${letterClass} _12`}>'m</span>

                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={roleArray} idx={22} />
                </h1>
                <h2>Full Satck Devloper / JavaScript Expert / Web3 Enthusiast</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home

