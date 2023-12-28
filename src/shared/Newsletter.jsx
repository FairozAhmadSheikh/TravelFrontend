import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
   const notify = () => toast("Thanks For Subscribing !");
   
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>Sign up today for valuable travel insights</h2>

                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        
                        <button  onClick={notify} className="btn newsletter__btn">Subcribe</button>
                     </div>
                     <p>Explore Kashmir with TravelPack Kashmir! Sign up today to unlock a treasure trove
                         of exclusive travel insights. Receive curated tips, insider information,
                          and practical guides to elevate your travel experiences. 
                          Join the TravelPack Kashmir community and embark on unforgettable journeys.
                           Subscribe now and let the adventures unfold!
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
         <ToastContainer/>
      </section>
   )
}

export default NewsLetter