import React from 'react'
import './footer.scss'
import logo2 from '../../assets/logo.svg'
import wk from '../../assets/vk.svg';
import fb from '../../assets/fb.svg';
import linked from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer__con container">
            <div className="footer__top">
                <img src={logo2} alt="" />
                <ul>
                    <li>
                        <img src={wk} alt="" />
                        <img src={fb} alt="" />
                        <img src={linked} alt="" />
                    </li>
                </ul>
            </div>
            <div className="footer__line"></div>
            <div className="footer__bot">
                <ul className='footer__bot-left'>
                    <li>
                        <h2>Продукция</h2>
                        <h3>Ламинатные тубы</h3>
                        <h3>Экструзионные тубы</h3>
                        <h3>Другая упаковка</h3>
                    </li>
                    <li>
                        <h2>Компания</h2>
                        <h3>О нас</h3>
                        <h3>Наша команда</h3>
                        <h3>Сертификаты</h3>
                    </li>
                    <li>
                        <h2>Разделы</h2>
                        <h3>Контакты</h3>
                        <h3>Новости</h3>
                        <h3>Вакансии</h3>
                    </li>
                </ul>
                <div className="footer__bot-right">
                    <ul>
                        <li>
                            <h3>Беларусь</h3>
                            <h4>+375 (17) 270 53 77</h4>
                            <h4>+375 (17) 270 53 78</h4>
                        </li>
                        <li>
                            <h3>Москва</h3>
                            <h4>+7 (495) 280 73 44</h4>
                            <h4>+7 (495) 280 73 44</h4>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Европа</h3>
                            <h4>+48 73 1111 044</h4>
                        </li>
                        <li className='ecre'>
                            <h3>Екатеринбург</h3>
                            <h4>+7 (343) 346 82 06</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__last">
                <p>
                    © 2022 Leangroup. All Rights Reserved.
                    Разработка и продвижение сайтов SkyWeb.by
                </p>
                <a href="#hero">^</a>
            </div>
        </div>
    </section>
  )
}

export default Footer