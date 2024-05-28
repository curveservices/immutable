
import morfbot from "../../../assets/images/morfbot.mp4"
import ReactPlayer from 'react-player/lazy'
import Client from "../../cards/ClientWork"
import Featured from "../../featured";
import "./index.scss";
import Button from "../../button";
import CubeSpinner from "../../Animations/cubespinner";
import CTA from "../../CTA";

const FeaturedWork = () => {
   
    return ( 
        <>
            <div className="featured-work">
                <section className="hero">
                    <div className="inner-hero">
                        <div className="text-box">
                            <h1>Featured Work</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur veritatis omnis quod quam doloremque perspiciatis odit delectus! Culpa veritatis aliquam rerum amet ut consequuntur deserunt, odit id corrupti atque?
                            Velit ab eum sit nemo. Ipsa nemo tempore omnis laborum illum sequi. In ex maxime corrupti itaque, facere reprehenderit deleniti rem suscipit amet! Eaque, voluptas enim exercitationem itaque iste possimus.
                            </p> 
                            <div className="button-container">
                                <Button
                                    text="Book a Call"
                                    link="https://calendly.com/immutable-studio/website-consultancy?month=2024-05"
                                    noreferer
                                />
                                <Button
                                    text="Contact us"
                                    link="contact"
                                />
                            </div>
                           
                        </div>
                    </div>
                    <div className="spinner">
                        <CubeSpinner />
                    </div>
                    
                </section>
                <section className="second">
                    <div className="second-inner">
                        <div className="text-box">
                            <h2>MorfBot</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur veritatis omnis quod quam doloremque perspiciatis odit delectus! Culpa veritatis aliquam rerum amet ut consequuntur deserunt, odit id corrupti atque?
                                Velit ab eum sit nemo. Ipsa nemo tempore omnis laborum illum sequi. In ex maxime corrupti itaque, facere reprehenderit deleniti rem suscipit amet! Eaque, voluptas enim exercitationem itaque iste possimus.
                            </p> 
                        </div>
                        <div className="player-wrapper">
                            <ReactPlayer
                                url={morfbot}
                                playing
                                loop
                            />
                        </div>
                    </div>
                    <div className="wireframe-container">
                        <Client name="morfbot" />
                    </div>
                    
                </section>
                <section className="featured">
                    <Featured />
                </section>
                <section className="cta">
                    <CTA />
                </section>
        </div>
        </>
     );
}
 
export default FeaturedWork;