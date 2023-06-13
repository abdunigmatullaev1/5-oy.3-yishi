import React from 'react'
import './info.scss'
import infoUser from '../../assets/info-user.png'
import infoPhn from '../../assets/info-phn.png'
import infoBg from '../../assets/info-bg.png'

const Info = () => {
  return (
    <section className='info'>
        <div className="info__con container">
            <h1>Получить подробную <span>информацию</span></h1>
            <p>Просто заполните форму, наш менеджер свяжется c вами в ближайшее время</p>
            <div className="registr">
                <form className='top__form'>
                    <div>
                        <img src={infoUser} alt=""/>
                        <input type="text"  placeholder='Ваше имя'/>
                    </div>
                    <div>
                        <img src={infoPhn} alt="" />
                        <input type="text"  placeholder='+375 (29) 0000000'/>
                    </div>
                </form>
                <form className="bot__form">
                    <input type="text" placeholder='Комментарий'/>
                </form>
            </div>
            <a href="#">Получить c информацию</a>
        </div>
    </section>
  )
}

export default Info