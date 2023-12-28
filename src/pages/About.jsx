import React from "react";
import Subtitle from './../shared/subtitle';
import './about.css'; // Import the custom CSS file

const About = () => {
    return (
        <div className='m-5'>
            <Subtitle subtitle={'TravelPack Kashmir'} />
            <p className="text-gray-700 mb-4">
                Welcome to <span className="font-bold">TravelPack Kashmir</span>, your go-to destination for unforgettable trips, vacations, honeymoons, and holidays in the picturesque region of Kashmir. At TravelPack, we are dedicated to making your travel experience seamless and memorable.
            </p>
            <div className="mb-4">
                <Subtitle subtitle={'Our Services'}/>
                <ul className="list-disc list-inside">
                    <li>Cab Rentals: Explore Kashmir at your own pace with our reliable cab services.</li>
                    <li>Air Ticketing: Secure the best flight deals for your journey to and from Kashmir.</li>
                    <li>Hotel Booking: Choose from a curated selection of accommodations for a comfortable stay.</li>
                    <li>Holidays and Trips Planning: Let us handle the details of your itinerary, ensuring a stress-free and enjoyable vacation.</li>
                </ul>
            </div>
            <p className="text-gray-700 mb-4">
                Whether you are a couple on a romantic honeymoon, a family seeking adventure, or an individual looking for a tranquil getaway, TravelPack Kashmir has tailored packages to suit every traveler's needs.
            </p>
            <p className="text-gray-700 mb-4">
                Trust us to transform your travel dreams into reality. Contact us today to plan your next extraordinary journey to Kashmir!
            </p>
            <div className="mb-4 contact-info">
                <Subtitle subtitle={'Contact Information'}/>
                <p className="text-gray-700 mb-2">
                    <span className="material-icons">location_on</span> Address : M.K Chowk Alamgari Bazar, Hawal Srinagar, Jammu & Kashmir 190011
                </p>
                <p className="text-gray-700 mb-2">
                    <span className="material-icons">phone</span> Contact Numbers : +91 7006 416 791, +91 9797 416 792
                </p>
                <p className="text-gray-700 mb-2 email">
                    <span className="material-icons">email</span> Email : travelpackkashmir@gmail.com
                </p>
            </div>
        </div>
    );
};

export default About;
