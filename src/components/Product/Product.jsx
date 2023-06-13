import React from 'react'
import './Product.scss'
import product1 from '../../assets/product-1.png'
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'
import product4 from '../../assets/product-4.png'
import product5 from '../../assets/product-5.png'

const Product = () => {
  return (
    <section className='product'>
        <div className="product__con container">
            <div className="product__top">
                <h1>Наша <span>Продукция</span></h1>
                <ul>
                    <li>
                        <a href="#">Ламинатные тубы</a>
                        <a href="#">Экструзионные тубы</a>
                        <a href="#">Другая упаковка</a>
                    </li>
                </ul>
            </div>
            <div className="product__bot">
                <ul>
                    <li>
                        <img src={product1} alt="" />
                        <img src={product2} alt="" />
                        <img src={product3} alt="" />
                        <img src={product4} alt="" />
                        <img src={product5} alt="" />
                    </li>
                </ul>
                <a href="#">Перейти в каталог</a>
            </div>
        </div>
    </section>
  )
}

export default Product