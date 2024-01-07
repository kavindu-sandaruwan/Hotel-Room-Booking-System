import React from "react";
import { defer } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white mt-10">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr/>
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/about">Adout</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            <div><Link to="/">Blog</Link></div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr/>
            <div><p className="text-white mb-1">#123, Makubura, Kottawa, Sri Lanka</p></div>
            <div><p className="text-white mb-1">+94 712 354 894</p></div>
            <div><p className="text-white mb-1">+94 748 476 255</p></div>
            <div><p className="text-white m-1">123companyweb@gmail.com</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
