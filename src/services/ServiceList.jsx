import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import aeroplaneImg from '../assets/images/aeroplane.png'
import HotelImg from '../assets/images/Hotel.png'
import CustomerImg from '../assets/images/CustomerImg.png'
const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `At Travel Pack Kashmir, We provide reliable and convenient car rental services for 
      customers to travel comfortably and efficiently.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `We Provide our Customers With Best Tour Guides .`,
   },
   {
      imgUrl: customizationImg,
      title: 'Car Rental Services',
      desc: `TravelPack Kashmir Provides Car Rental Services.`,
   },
   {
      imgUrl: aeroplaneImg,
      title: 'Air Ticketing',
      desc: `Fly high without breaking the bank with our travel agency's affordable air 
      tickets to destinations around the World.`,
   },
   {
      imgUrl: HotelImg,
      title: 'Hotel Booking',
      desc: `Discover your perfect stay with our travel agency's extensive 
      selection of hotels, ranging from budget-friendly to luxury accommodations.`,

   },
   {
      imgUrl: CustomerImg,
      title: 'Customer Support 24*7',
      desc: `In case of unexpected changes or issues during the trip, travel agencies provide 24/7 customer support and assistance to ensure that travelers have a smooth and enjoyable experience..`,
      
   },
   
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList