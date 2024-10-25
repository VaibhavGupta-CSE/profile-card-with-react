import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { data } from '../data'

function CardContent() {
  const info = data
  const [showData, setShowData] = useState([])
  const [detail, setDetail] = useState(false)
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const displayDetail = (value) => {
    let ref = value
    let find = info.filter((item) => item.id === ref)
    setDetail(true)
    setShowData(find)
  }

  return (
    <>
      {detail &&
        showData.map((item) => {
          const { image, title, name, company, description } = item
          return (
            <>
              <div className='detail-container'>
                <div className='profile-detail'>
                  <div className='short-detail'>
                    <img src={image} alt={name} />
                    <div className='detail'>
                      <h2>{name}</h2>
                      <h2>{title}</h2>
                      <p>{company}</p>
                    </div>
                  </div>
                  <hr />
                  <div className='description'>`{description}`</div>
                  <button type='button' onClick={() => setDetail(false)}>
                    x
                  </button>
                </div>
              </div>
            </>
          )
        })}
      <div className='main-container'>
        <div className='container'>
          <div className='card-container'>
            <div className='card-wrapper'>
              <Slider {...settings}>
                {info.map((item) => {
                  const { id, image, name, company, title } = item
                  return (
                    <>
                      <div
                        key={id}
                        id={id}
                        className='card-content'
                        onClick={(e) => displayDetail(e.target.id)}
                      >
                        <img src={image} alt={name} />
                        <h2>{name}</h2>
                        <h2>{title}</h2>
                        <p>{company}</p>
                      </div>
                    </>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardContent
