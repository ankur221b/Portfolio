function Contact() {

  return (
    <div className="contact-wrapper" id="contact">
        
        <div className="message">
            <form className="form">
                <input className="name input" placeholder="Name" />
                <input className="email input" placeholder="Email" />
                <textarea className="msg input" placeholder="Your Message"></textarea>
                <input type="submit" className="submit" />
            </form>
        </div>

        <div className="wrapper">
            
            <div className="contact-title" style={{color: "#fff"}}>
                <div>CONTACT ME</div>
                <a href="https://www.linkedin.com/in/ankur-yadav-738083164/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/ankur221b" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <button className="coffee"><i className="fas fa-coffee" style={{margin:'0.2em 0.25em 0.2em 0.2em'}}></i>Buy me a chai</button>
            </div>
            
           
        </div>

    </div>
  );
}
export default Contact;
