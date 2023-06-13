import React from 'react'
import './comand.scss'
import comand1 from '../../assets/comand-user-1.svg';
import comand2 from '../../assets/comand-user-2.svg';
import comand3 from '../../assets/comand-user-3.svg';
import comand4 from '../../assets/comand-user-4.svg';
import comand5 from '../../assets/comand-user-5.svg';

const Comand = () => {
  return (
    <section className='comand'>
        <div className="comand__con container">
            <h1>Наша <span>команда</span></h1>
            <ul>
                <li>
                    <img src={comand1} alt="" />
                    <h4>Войнич Дарья</h4>
                    <p>Заместитель директора по продажам</p>
                    <a href="#">+375 (17) 270-53-77 (317)</a>
                    <a href="#"> +375 29 112-73-48</a>
                    <h5>k.melhechenko@leangroup.by</h5>
                </li>
                <li>
                    <img src={comand2} alt="" />
                    <h4>Мисько Екатерина</h4>
                    <p>Начальник отдела сопровождения</p>
                    <a href="#">+375 (17) 270-53-77 (115)</a>
                    <a href="#"> +375 29 112-73-48</a>
                    <h5>k.melnichenko@leangroup.by</h5>
                </li>
                <li>
                    <img src={comand3} alt="" />
                    <h4>Дмитроченко Дмитрий</h4>
                    <p>Начальник отдела допечатной подготовки</p>
                    <a href="#">+375 (17) 270-53-77 (333)</a>
                    <a href=""> +375 29 360-32-26</a>
                    <h5>dmitrochenko@leangroup.by</h5>
                </li>
                <li>
                    <img src={comand4} alt="" />
                    <h4>Антух Евгений</h4>
                    <p>Начальник отдела снабжения</p>
                    <a href="#">+375 (17) 270-53-77 (148)</a>
                    <a href=""> +375 44 764-16-28</a>
                    <h5>j.antuh@leangroup.by</h5>
                </li>
                <li>
                    <img src={comand5} alt="" />
                    <h4>Мисник Елена</h4>
                    <p>Специалист по работе с клиентами</p>
                    <a href="#">+375 (17) 270-53-77 (322)</a>
                    <a href=""> +375 29 329-34-03</a>
                    <h5>e.misnik@leangroup.by</h5>
                </li>
            </ul>
            <div>
            <a className='comand__btn' href="#">Наша команда</a>
            </div>
        </div>
    </section>
  )
}

export default Comand