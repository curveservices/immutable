import Button from '../button/index'
import CubeSpinner from '../Animations/cubespinner';
import './index.scss';
import StaticCubes from '../Animations/staticCubes';

const Home = () => {
   
    return ( 
        <div className='home-page'>
            <section className='right-hero'>
                <h1 className='main-title'>Web Develoment Agency</h1>
                <p>Immutable Studio is a leading web development agency comprising seasoned web designers,
                    UX/UI specialists, and web developers who excel in crafting bespoke business websites. Our team is dedicated to delivering cutting-edge technology
                    solutions tailored to help your company achieve its goals with utmost efficiency.
                </p>
                <Button link='contact' text='CONTACT US' />
                {/* <div className="letter-contianer" >
                    <div className='brackets'>&#123; &#125;</div>
                    <div className='symbol1'>&lt; &gt;</div>
                    <div className='symbol2'>&lt;&#47;&gt;</div>
                </div> */}
            </section>
            <section className="left-hero">
                <CubeSpinner />
            </section>
            <section className='second-section'>
                <StaticCubes/>
            </section>
        </div>
     );
}
 
export default Home;