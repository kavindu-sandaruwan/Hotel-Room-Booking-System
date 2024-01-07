// import React from "react";
import AppBreadcrumbs from "../components/includes/AppBreadcrubs";
import React, { useState } from "react";
import "../css/details.css";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import Promotions from "./promotions";

import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

const Details = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDateRange, setSelectedDateRange] = useState("");

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const onApply = (event, picker) => {
    const formattedDateRange = `${picker.startDate.format(
      "MM/DD/YYYY"
    )} - ${picker.endDate.format("MM/DD/YYYY")}`;
    setSelectedDateRange(formattedDateRange);
  };

  return (
    <div>
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              {/* <h4>Promotion Details</h4> */}
              <AppBreadcrumbs />
            </div>

            {/* <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact US</h6>
            </div> */}
          </div>

          <div>
            <img className="bgimage" src="/images/img1.jpg" alt="" />

            <section className="section">
              <div className="container">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 border-start">
                        <h5 className="main-heading">
                          Suite Serenity: Exclusive Packages for a Luxurious
                          Stay
                        </h5>
                        <p className="details">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                      </div>

                      <div className="col-md-6">
                        <h6 className="heading1">Book This Offer</h6>
                        <hr />
                        <div className="form-group py-3">
                          <label for="">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                          ></input>
                        </div>
                        <div className="form-group py-3">
                          <label for="">Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                          ></input>
                        </div>
                        <div className="form-group py-3">
                          <label for="">Email Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Email Address"
                          ></input>
                        </div>

                        {/* <div className="form-group py-3">
                          <label for="">Select your date</label>

                          <Calendar onChange={onChange} value={date}></Calendar>
                        </div> */}

                        <div className="form-group py-3">
                          <label htmlFor="">Select your date</label>
                          <DateRangePicker onApply={onApply}>
                            <button className="btn btn-secondary w-100">
                              {selectedDateRange
                                ? selectedDateRange
                                : "Select your booking date!"}
                            </button>
                          </DateRangePicker>
                        </div>

                        <div className="form-group py-3">
                          <button
                            type="button"
                            className="btn btn-primary shadow w-100"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ; */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

{
  /* <section className="section">
  <div className="container">
    <div className="card shadow">
      <div className="card-body">
        <div className="row">

          <div className="col-md-6 border-start">
            <h5 className="main-heading">Address Information</h5>
            <div className="underline"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>

          <div className="col-md-6">
            <h6>Contact Form</h6>
            <hr />
            <div className="form-group py-3">
              <label for="">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              ></input>
            </div>
            <div className="form-group py-3">
              <label for="">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
              ></input>
            </div>
            <div className="form-group py-3">
              <label for="">Email Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email Address"
              ></input>
            </div>
            <div className="form-group py-3">
              <label for="">Message</label>
              <textarea
                rows="3"
                className="form-control"
                placeholder="Type your Message..."
              ></textarea>
            </div>
            <div className="form-group py-3">
              <button type="button" className="btn btn-primary shadow w-100">
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>; */
}
