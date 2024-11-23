import React, { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import audit from '../../assets/images/audit.webp'
import "./index.scss";

ReactModal.setAppElement('#root');

const ExitIntentPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const refForm = useRef();

    useEffect(() => {
        const handleExitIntent = (e) => {
            if (e.clientY <= 100) {
                setIsOpen(true);
            }
        };
        document.addEventListener("mouseleave", handleExitIntent);
        return () => {
            document.removeEventListener("mouseleave", handleExitIntent);
        };
    }, []);

     const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        const formEle = document.querySelector("form");
        e.preventDefault();
        const formInput = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbwVWYWr7UAjmyjidZ5KTpKmVwURT9CI61BC8yr55O-7TLl3jidv8KA7qj11ocqY2YPX/exec",
            {
                method: 'POST',
                body: formInput
            }
        )
        emailjs.sendForm(
            "p.rossiter83@gmail.com",
            "contact_form",
            refForm.current,
            "w1ULsXxchzrjhuclR",
        )
        .then(
            () => {
                toast.success("Message successfully sent!");
                refForm.current.reset();
                handleClose();
            },
            () => {
                toast.error(" Failed to send your message, pleease try again");
            },
        );
    };

    return (
        <>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={handleClose}
                overlayClassName="popup-overlay"
                className="popup"
            >
                <img src={ audit } className='audit-img' alt='image of a 100% website audit score'/>
                <div className="text-box">
                <FontAwesomeIcon className='popup-close' icon={faClose} size='1x' color='#000' onClick={handleClose} />
                <div className='strap'>Don't go without getting a</div>
                <h1 className='title'>Free SEO & Performance Audit</h1>
                <p>Get your <b>FREE</b> SEO, Performance &amp; Accessibility audit. Find opportunities for improvement!</p>
                <form ref={refForm} onSubmit={handleSubmit} id="exit-intent-form" className='popup-form'>
                    <div className="form-group">
                        <label htmlFor="name" id='name' name='name'>Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id='name'
                            placeholder="full name"
                            autoComplete='true'
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" id='email' name='email'>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            placeholder="youremail@example.com"
                            autoComplete='true'
                            required
                        /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject" id='subject' name='subject'>Website URL</label>
                        <input
                            type="text"
                            name='subject'
                            id='subject'
                            placeholder='www.yourwebite.com'
                        />
                    </div>
                    <textarea
                        name="message"
                        value="Free SEO & Performance Audit"
                        readOnly
                        className='subject'
                    ></textarea>
                        <input className='audit-button' type="submit" value="Claim Your Free Audit" />
                </form>
                </div>
            </ReactModal>
            <ToastContainer position='bottom-center' autoClose={2000} theme='colored' closeOnClick pauseOnHover />
        </>
    )
}

export default ExitIntentPopup
