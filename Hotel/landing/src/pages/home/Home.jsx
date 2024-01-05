import React from 'react'
import './home.scss'
import NavTop from '../../component/navTop/NavTop'
import NavBottom from '../../component/navBottom/NavBottom'
import Slider from '../../component/slider/Slider'
import Header from '../../component/seachItem/Header'
import logo from "../../assets/aboutt.jpg"
const Home = () => {
  return (
    <div>
      <NavTop/>
      <NavBottom/>
      <Slider/>
      <Header/>
      <div className="about">
        <div className="left">
            <div className="content">
           <h2>About</h2>
           <p>A personal tropical sanctuary that is perfect for escaping the city, Shangri-La Colombo overlooks the Indian Ocean in the heart of the business district with direct access to the most extensive international shopping mall in Sri Lanka, Shangri-La’s own One Galle Face Mall. The hotel offers the finest accommodation in Colombo, an exciting new dining and social scene and the largest and extensive hotel conference and event facilities.</p>

           <li>541 rooms, suites and apartments</li>
           <li>Signature dining venues with an exciting array of seasonal events</li>
           <li>The city's most extensive and versatile event spaces</li>

           <button className="btn">Learn More</button>
        </div>
        </div>
        <div className="right">
                <img src={logo} alt="" />
        </div>
      </div>
      <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/offer-detail-bottom.jpg" alt=""  className='sky'/>
    </div>
  )
}

export default Home
