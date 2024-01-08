import React from 'react';
import jetwingFooterImage from '../assets/jetwing-footer.jpg';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">PM Luxury Gardens</h1>

          <h2>Contact</h2>

          <address>
            5534 Temple Road/ Kandy/ Srilanka<br />
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Links</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Home </a>
              </li>

              <li>
                <a href="#">About </a>
              </li>

              <li>
                <a href="#">Rooms </a>
              </li>

              <li>
                <a href="#">Contact </a>
              </li>

              <li>
                <a href="#">Reviews </a>
              </li>

              
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2024. All rights reserved.</p>

          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
