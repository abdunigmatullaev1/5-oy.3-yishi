import React from 'react'
import './news.scss'
import news1 from '../../assets/news-1.svg';
import news2 from '../../assets/news-2.svg';
import news3 from '../../assets/news-3.svg';


const News = () => {
  return (
    <section className='news'>
        <div className="news__con container">
            <h1>Новости</h1>
            <ul>
                <li>
                    <img src={news1} alt="" />
                    <h6>28.01.2022</h6>
                    <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </li>
                <li>
                    <img src={news2} alt="" />
                    <h6>21.01.2022</h6>
                    <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </li>
                <li>
                    <img src={news3} alt="" />
                    <h6>16.12.2021</h6>
                    <p>Туба, как вид упаковки</p>
                </li>
            </ul>
            <a href="#">Все новости</a>
        </div>
    </section>
  )
}

export default News