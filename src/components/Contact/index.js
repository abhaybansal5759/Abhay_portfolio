import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useRef } from 'react'

const Contact = () => {
    const notify = () =>{ 
        // console.log("toast is working");
        toast("submitted");
    }

  let url = "https://script.google.com/macros/s/AKfycbxt47VQoXrrUP9m7_migqbtzXK9paJeU2ASCNgvnNSKtg5g7ceIW9Veo6Ogs6nKbYwjwg/exec";
  const formRef = useRef(null);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    let d = new FormData(formRef.current);
    fetch(url, {
      method: "POST",
      body: d
    }).then((res) => res.text())
      .then((finalRes) => console.log(finalRes));
      formRef.current.reset();
   

  }

  const [letterClass] = useState('text-animate');

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>I am interested in freelance opportunities - especially ambitious or large projects. However, if you have any other request or query, please don't hesitate to contact me using the form below.</p>
          <div className='contact-form'>
            <form method="post" ref={formRef} onSubmit={handleSubmit}>
              <ul>
                <li className='half'>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className='half'>
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input onClick={notify} type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}

export default Contact;
