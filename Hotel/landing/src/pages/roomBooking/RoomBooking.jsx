import React, { useState } from 'react';
import "./roomBooking.scss";
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import NavTop from '../../component/navTop/NavTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Room from "../../assets/abouttt.jpg"
import Room2 from "../../assets/room2.jpg"
import Room7 from "../../assets/room7.jpg"
import Room8 from "../../assets/room8.jpg"
import Room9 from "../../assets/room9.jpg"


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [date, setDate] = useState(location.state?.date || [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || {
    adult: 1,
    children: 0,
    room: 1,
  });

  const formatDateRange = () => {
    return `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`;
  };

  return (
    <div>
      <NavTop />
      <div className="container">
        <div className="items">
          <div className="content">
            <div className="left">
              <FontAwesomeIcon icon={faCalendarDays} />
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && (<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date}/>)}
            </div>
            <div className="adult">
            <div className="optionCounter">
            <span>Adult</span>  
            <button className='optionCounterbutton' >{options.adult}</button>
            <span className="optionCounterNumber">Children</span>
            <button className='optionCounterbutton'>{options.children}</button>
            <span className="optionCounterNumber">Room</span>
            <button className='optionCounterbutton'>{options.room}</button>
            </div>
            </div>
            <div className="center">
              <span className="lsOptionText">
                Max price
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="right">
              <span className="lsOptionText">
                Min price
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <button className='btnsearch'>Search</button>
          </div>
        </div>
        
      </div>
      <div className="roomdetails">
          <div className="left2">
            <span>Room Type</span>
          </div>
          <div className="center2">
            <span>Rate Plan</span>
          </div>
          <div className="right2">
            <span>Average Per Night</span>
          </div>
        </div>
        <div className="rooms">
          <div className="roomContent">
          <div className="left3">
          <img src={Room} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room2} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room7} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room8} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room2} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room7} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room2} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room8} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>

          <div className="roomContent">
          <div className="left3">
          <img src={Room7} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
     
       
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>


          <div className="roomContent">
          <div className="left3">
          <img src={Room8} alt=""  className='roomImg'/>
          
          
          </div>
          <div className="center3">
            <span className="roomName">Delux Luxury</span>
            <span className="roomDimen">Each room offers 42 sqm / 452 sqf of luxury.</span>
            <p className="roomDesc">Our Premium Room invites you to a premium experience in views and comfort.</p>
            <span className="RoomDetailsBtn"><a href="">Room Details</a></span>
          </div>
          <div className="right3">
        <div className="siDetailTexts">
            <span className="siPrice">LKR : 85,000</span>
            <span className="usd">USD : 400</span>
            <span className="tax">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
      </div>
        
          </div>
        </div>


        
      <img src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/page_bottom/offer-detail-bottom.jpg" alt="" className='sky' />
    </div>
  );
}

export default List;