import style from'./services.module.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import Loader from 'react-loaders';
import Button from '../button';
import PriceCard from '../cards/fullPrice';
import CallToAction from '../CTA';

const Singleservices = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [second, setSecond] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPrice = window.scrollY;
            const scrollSecond = window.scrollY;
            setSecond(scrollSecond > 150);
            setIsScrolled(scrollPrice > 1000);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="single-service">
            <section className={style.hero}>
                <Loader type="ball-spin-fade-loader" />
                <div className={style.innerHero}>
                    <div className={style.textBox}>
                        <h1>{props.HeroH1}</h1>
                        <p>{props.HeroP}</p>
                        <h2>{props.HeroH2}</h2>
                        <div className={style.btnContainer}>
                            <Button text="Speak with us" link="/contact" />
                            <Button
                                target="_blank"
                                text="book a call"
                                link="https://calendly.com/immutable-studio/website-consultancy"
                            />
                        </div>
                    </div>
                    <div className={style.gifContainer}>
                        <img src={props.src} alt="gif" className={style.gif} />
                    </div>
                </div>
            </section>
            <section className={style.secondSection}>
                <div className={style.secondInner}>
                    <div className={`${second ? style.animSecond : style.secondNone}`}>
                        <h1>{props.secondH1}</h1>
                        <p>{props.secondP}</p>
                    </div>
                    <img
                        src={props.img}
                        alt="title image"
                        className={`${second ? style.animSecondimg : style.secondNone}`}
                    />
                </div>
            </section>
            <section className={style.thirdSection}>
                <div className={style.thirdInner}>
                    <div className={style.thirdTextBox}>
                        <h1>CHECK OUT OUR {props.thirdH1} PACKAGES</h1>
                        <p>{props.thirdP}</p>
                    </div>
                    <div
                        className={`${isScrolled ? style.contentAnim : style.none}`}
                    >
                        <PriceCard name={props.name} />
                    </div>
                </div>
            </section>
            <section className="cta">
                <CallToAction />
            </section>
        </div>
    );
}

export default Singleservices;