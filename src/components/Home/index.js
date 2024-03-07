import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> Hi, <br /> I'm

                Japhet
                <br />
                A Full Stack Developer
                </h1>
                <h2>Full Satck Devloper / JavaScript Expert / Web3 Enthusiast</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home

