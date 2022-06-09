import { useRef } from 'react'
import './Contact.css'

export default function Contact(props) {
    const nameInput = useRef(null)
    const emailInput = useRef(null)
    const subjectInput = useRef(null)
    const messageInput = useRef(null)
    const resetBtn = useRef()
    const verification = useRef()
    
    const handleForm = (TSE) => { 
        TSE.preventDefault()

        const nameInputValue = nameInput.current.value;
        const emailInputValue = emailInput.current.value;
        const subjectInputValue = subjectInput.current.value;
        const messageInputValue = messageInput.current.value;

        const formData = {
            subject: subjectInputValue,
            name: nameInputValue,
            email: emailInputValue,
            querry: messageInputValue
        }

        if(nameInputValue === '' ) {
           throwError("please fill out the username")
        }

        else if (nameInputValue.length < 2 ) {
            throwError("username too short")
        }

        else if(emailInputValue === '' ) {
            throwError("please enter email")
        }

        else if(subjectInputValue === '' ) {
            throwError("please enter subject")
        }

        else if(messageInputValue === '' ) {
            throwError("please enter message")
        }

        else if (messageInputValue.length < 6) {
            throwError("message too short")
        }

        // else if (!(emailInputValue.match(validEmail))) {
        //     console.log("invalid email");
        // }

        else {
            resetBtn.current.click()
            props.sendMessage(formData)
            showSuccess("Message Sent.")
        }

    }

    let throwError = (errorMessage) => {
        verification.current.innerText = errorMessage;
        verification.current.classList.add("show-error");
    }

    let showSuccess = (successMessage) => {
        verification.current.innerText = successMessage;
        verification.current.classList.add("show-success"); 
    }

    let typingRemoveError = (TSE) => {
        verification.current.classList.remove("show-error");
        verification.current.classList.remove("show-success"); 
    }

  return (
    <div className="contact-container component" id="contact-me">
        <h2 className="main-heading bott-line" data-aos='fade-up'>Contact</h2>
        <div className="contact-wrapper shadowed-card" data-aos="fade-up">
            <div className="contact-info">
                <h2>Contact Info</h2>
                <div className="contact-details">
                    <p><i className="fa-solid fa-phone-volume"></i><span>+265994351384 / +265881833950</span></p>
                    <p><i className="far fa-envelope"></i><span>ashrafchitambaa3@gmail.com</span></p>
                    <p><i className="fa-solid fa-location-dot"></i><span>Zomba, Malawi</span></p>
                    
                    <div className="direct-links">
                        <a href="http://facebook.com/Ashraf.Chitambaa"><i className="fab fa-facebook"></i></a>
                        <a href="http://wa.me/+265994351384"><i className="fab fa-whatsapp"></i></a>
                        <a href="http://facebook.com/Ashraf Chitambaa/"><i className="fab fa-instagram"></i></a>   
                    </div>
                  
                </div> 
            </div>
            
            <div className="form-container outlined-card cornered-card">
                <h3 className="heading">Send Message</h3>
                <form onSubmit={handleForm} className='form'>
                    <div className="form-data name-container">
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input 
                            type="text" 
                            className="form-input" 
                            name="name" 
                            placeholder="Full Name"
                            autoComplete="off" maxLength="50"
                            ref={nameInput} 
                            onKeyUp={typingRemoveError}
                        />

                        {/* <span className="verification name-verification">error message</span> */}
                    </div>

                    <div className="form-data email-container">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input 
                            type="email" 
                            className="form-input" 
                            name="email" 
                            placeholder="Email Adress" 
                            autoComplete="off" 
                            maxLength="70" 
                            ref={emailInput}
                            onKeyUp={typingRemoveError}
                        />

                        {/* <span className="verification email-verification">error message</span> */}
                    </div>

                    <div className="form-data subject-container">
                        <label htmlFor="subject" className='form-label'>Subject</label>
                        <input 
                            type="text" 
                            className="form-input" 
                            name="subject" 
                            placeholder="Subject" 
                            autoComplete="off" 
                            maxLength="70"
                            ref={subjectInput}
                            onKeyUp={typingRemoveError}
                        />

                        {/* <span className="verification subject-verification">error message</span> */}
                    </div>

                    <div className="form-data message-container">
                        <label htmlFor="message" className='form-label'>Message</label>
                        <textarea 
                            name="message" 
                            className="form-textarea" 
                            cols="25" rows="8" 
                            placeholder="type message..."
                            ref={messageInput}
                            onKeyUp={typingRemoveError}>
                        </textarea>

                        {/* <span className="verification message-verification">error message</span> */}
                    </div>

                    <button className='form-btn'>Send<i className="far fa-paper-plane"></i></button>
                    <button type="reset" ref={resetBtn}>reset</button>

                    <span className='verification' ref={verification}>error message</span>
                </form>
            </div>
        </div>
    </div>
  )
}
