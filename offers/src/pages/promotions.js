import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/promotions.css";
import { Link } from "react-router-dom";

const Promotions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: "double bed room",
      img: "/images/img1.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      name: "double bed room",
      img: "/images/img2.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      name: "double bed room",
      img: "/images/img3.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      name: "double bed room",
      img: "/images/img4.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      name: "double bed room",
      img: "/images/img5.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      name: "double bed room",
      img: "/images/img6.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      name: "double bed room",
      img: "/images/img7.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },

    {
      name: "double bed room",
      img: "/images/img8.jpg",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      {/* top margin */}
      <div className="mt-15">
        <h2 className="heading">Promotions</h2>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="card1 border border-black">
              <div className="card2">
                <img className="image" src={d.img} alt=""></img>
                {/* <img src={require(`./components/images/${d.img}`).default} alt="" /> */}
              </div>

              <div className="body-text">
                <p className="body-title">{d.name}</p>
                <p>{d.review}</p>
                {/* <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl"> */}

                <Link to={"/details"}>
                  <button
                    className="btn1"
                    style={{
                      backgroundColor: "#e6b223",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      padding: "10px 20px",
                      borderRadius: "8px",
                    }}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Promotions;
