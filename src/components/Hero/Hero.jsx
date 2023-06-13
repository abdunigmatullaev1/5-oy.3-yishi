import React from 'react'
import Slider from 'react-slick';
import './hero.scss';
import hero1 from '../../assets/hero-bg.png'

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="hero" id='hero'>
            <div className="hero__con container">
                <div className="hero__left">
                        <Slider {...settings}>
                            <div className="hero__box">
                                <h4>LEANGROUP - тубы и этикетки</h4>
                                <h1>Ламинатные тубы</h1>
                                <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                                <a href="#">Каталог</a>
                            </div>
                            <div className="hero__box">
                            <h4>LEANGROUP - тубы и этикетки</h4>
                                <h1>Ламинатные тубы</h1>
                                <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                                <a href="#">Каталог</a>
                            </div>
                            <div className="hero__box">
                            <h4>LEANGROUP - тубы и этикетки</h4>
                                <h1>Ламинатные тубы</h1>
                                <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                                <a href="#">Каталог</a>
                            </div>
                        </Slider>
                </div>
            </div>
        </div>

  )
}

export default Hero