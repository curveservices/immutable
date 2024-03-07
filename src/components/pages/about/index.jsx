
import { useLayoutEffect } from 'react';
import Symbols from '../../Animations/symbols';
import Button from '../../button';
import Socials from '../../socials';
import './index.scss'

const About = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return ( 
        <div className='about-page'>
            <section className="hero">
                <div className="inner-hero">
                    <div className="text-box">
                        <Symbols />
                        <h1 className='title'>Who are Immutable studio? And what do they do?</h1>
                        <div className="btn-container">
                            <Socials />
                            <Button
                                link='contact'
                                text='Hire us'
                            />
                        </div>
                        
                        <div className="right-hero">
                            <p>We are a proud south east London design studio specialising in web development, design, social media marketing,
                                and AI chat bots. We aim to apply the best of our skills and enthusiasm to your challenges and ideas.
                            </p>
                            <p>We are passionate about tech, design, problem solving and business.</p>

                            <p>Paul created the company in 2022 and has been delivering amazing websites and AI solutions ever since.
                                His nephew Harvey fresh from the Uni of Westminster has come on board to deliver social media marketing and strategies for our clients
                            </p>
                            
                        </div> 
                    </div>
                </div>
            </section>
            <section className="second-section">
                <div className="second-inner">
                    <div className="text-box">
                        <h1>MEET THE TEAM</h1>
                    </div>
                    <div className="team-container">

                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default About;