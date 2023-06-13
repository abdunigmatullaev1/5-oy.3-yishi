import React from 'react'
import "./company.scss"
import video1 from "../../assets/video.svg"

const Company = () => {
  return (
    <section className='company'>
        <div className="company__con container">
            <div className="company__top">
                <h1>О компании <span>LEANGROUP</span></h1>
            </div>
            <div className="company__bot">
                <img src={video1} alt="" />
                <div className="company__bot-r">
                    <p>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.</p>
                    <p>Имея две технологии – для производства ламинатных иэкструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный   печатный цех в ламинате и in-line печать в экструзии с  возможностью различных дополнительных опций декора. Особое  внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.</p>
                    <p>С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company