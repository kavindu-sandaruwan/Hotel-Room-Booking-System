import React from 'react';
import '../styles/home.css'
import logo from "../assets/hotel-room-accommodation-service-500x500.webp";
import NavBottom from '../components/TopBottom';
import '../styles/homescreen.css';


const Home: React.FC = () => {
  return (
    <div className='Room_con'>  
    <div className='align'>
      <div className="about">
        <div className="left">
          <div className="content">
            <h2>About</h2>
            <p>A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La’s own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.</p>

            <ul>
              <li>541 rooms, suites, and apartments</li>
              <li>Signature dining venues with an exciting array of seasonal events</li>
              <li>The city's most extensive and versatile event spaces</li>
            </ul>

            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right">
          <img src={logo} alt="" />
        </div>
        <div>
          
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Home;
