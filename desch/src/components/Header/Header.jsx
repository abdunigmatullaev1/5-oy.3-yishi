import React from 'react';
import logo1 from '../../assets/logo.svg';
import './header.scss'

const Header = () => {
  return (
     <header className='header'>
        <nav className='header__nav'>
            <div className="header__nav-con container">
                <img src={logo1} alt={logo1} />
                <div className="header__navigation">
                    <a href="#">Продукция</a>
                    <a href="#">Сертификаты</a>
                    <a href="#">Наша команда</a>
                    <a href="#">O нас</a>
                    <a href="#">Новости</a>
                    <a href="#">Вакансии</a>
                    <a href="#">Контакты</a>
                </div>
                <div className="header__lan">
                    <a href=""><span>RU</span>  | EN</a>
                </div>
            </div>
        </nav>
     </header>
  )
}

export default Header